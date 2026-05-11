use markitdown::{ llm, MarkItDown };
use markitdown::model::ConversionOptions;
use std::{ env, path::Path };

pub fn convert_from_path(
    filename: &str,
    llm_api_key: Option<String>,
    llm_client: Option<String>,
    llm_model: Option<String>
) -> String {
    let mark = MarkItDown::new();
    let use_llm = llm_api_key
        .as_ref()
        .map(|key| !key.trim().is_empty())
        .unwrap_or(false);
    let llm_client = llm_client.filter(|client| !client.trim().is_empty());
    let llm_model = llm_model.filter(|model| !model.trim().is_empty());

    let extension = Path::new(filename)
        .extension()
        .and_then(|ext| ext.to_str())
        .map(|ext| {
            let ext = ext.to_lowercase();
            if ext == "jpeg" {
                ".jpg".to_string()
            } else {
                format!(".{}", ext)
            }
        });

    let llm_enabled =
        extension
            .as_deref()
            .map(|ext| ext == ".jpg")
            .unwrap_or(false) &&
        use_llm &&
        llm_client.is_some() &&
        llm_model.is_some();

    if llm_enabled {
        if let (Some(client), Some(key)) = (llm_client.as_deref(), llm_api_key.as_deref()) {
            match client {
                "openai" => unsafe {
                    env::set_var("OPENAI_API_KEY", key);
                }
                "gemini" => unsafe {
                    env::set_var("GEMINI_API_KEY", key);
                }
                "deepseek" => unsafe {
                    env::set_var("DEEPSEEK_API_KEY", key);
                }
                _ => {}
            }
        }
    }

    let options = ConversionOptions {
        file_extension: extension.clone(),
        url: None,
        llm_client: if llm_enabled {
            llm_client.clone()
        } else {
            None
        },
        llm_model: if llm_enabled {
            llm_model.clone()
        } else {
            None
        },
    };

    let res = mark.convert(filename, Some(options));

    let has_llm_description = |text: &str| text.contains("# Description:");

    let set_llm_env = |client: &str, key: &str| {
        unsafe {
            match client {
                "openai" => env::set_var("OPENAI_API_KEY", key),
                "gemini" => env::set_var("GEMINI_API_KEY", key),
                "deepseek" => env::set_var("DEEPSEEK_API_KEY", key),
                _ => {}
            }
        }
    };

    let fetch_llm_description = || {
        if
            let (Some(client), Some(model), Some(key)) = (
                llm_client.as_deref(),
                llm_model.as_deref(),
                llm_api_key.as_deref(),
            )
        {
            set_llm_env(client, key);
            let rt = match tokio::runtime::Builder::new_current_thread().enable_all().build() {
                Ok(rt) => rt,
                Err(_) => {
                    return None;
                }
            };
            rt.block_on(async { llm::get_llm_description(filename, client, model).await })
        } else {
            None
        }
    };

    match res {
        Ok(Some(mut conversion_result)) => {
            if
                llm_enabled &&
                extension.as_deref() == Some(".jpg") &&
                !has_llm_description(&conversion_result.text_content)
            {
                if let Some(description) = fetch_llm_description() {
                    conversion_result.text_content.push_str("\n\n# Description:\n");
                    conversion_result.text_content.push_str(&description);
                } else {
                    conversion_result.text_content.push_str(
                        "\n\n# Description unavailable: check API key, provider, model and network."
                    );
                }
            }
            conversion_result.text_content
        }
        Ok(None) => {
            if let Some(description) = fetch_llm_description() {
                format!("# Description:\n{}", description)
            } else if extension.as_deref() == Some(".jpg") {
                "Conversion failed for JPEG image. Please check the image file and your LLM configuration.".to_string()
            } else {
                "Unsupported file type or unsupported format for markitdown-rs. Only JPEG images (.jpg/.jpeg) are supported for image descriptions.".to_string()
            }
        }
        Err(error) => {
            if let Some(description) = fetch_llm_description() {
                format!("# Description:\n{}", description)
            } else if extension.as_deref() == Some(".jpg") {
                format!("Conversion failed for JPEG image: {}", error)
            } else {
                format!("Conversion failed: {}", error)
            }
        }
    }
}
