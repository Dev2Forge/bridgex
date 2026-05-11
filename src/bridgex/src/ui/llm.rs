use freya::{ elements::rect::rect, prelude::* };
use std::rc::Rc;
use crate::ui::popup::PopupOwn;

const LLM_PROVIDERS: &[(&str, &str)] = &[
    ("openai", "OpenAI"),
    ("gemini", "Gemini"),
    ("deepseek", "Deepseek"),
];

fn llm_models_for(provider: &str) -> &'static [&'static str] {
    match provider {
        "openai" => &["gpt-4o", "gpt-4o-mini", "gpt-3.5-turbo"],
        "gemini" => &["gemini-2.0-flash", "gemini-1.5-flash"],
        "deepseek" => &["deepseek-1", "deepseek-2"],
        _ => &[],
    }
}

pub struct LLMApiKeyPopup {
    pub show_popup: State<bool>,
    pub popup: Popup,
}

impl LLMApiKeyPopup {
    pub fn new(
        llm_api_key: State<String>,
        llm_client: State<String>,
        llm_model: State<String>,
        save_config: Rc<dyn Fn()>
    ) -> Self {
        let show_popup = use_state(|| false);
        let mut close_popup_done = show_popup.clone();
        let save_config_done = save_config.clone();

        let provider_buttons = LLM_PROVIDERS.iter().fold(
            rect().horizontal().width(Size::fill()).spacing(6.0),
            |container, &(provider, label)| {
                let mut llm_client = llm_client.clone();
                let mut llm_model = llm_model.clone();
                container.child(
                    Button::new()
                        .flat()
                        .with_corner_radius(6.0)
                        .on_press(move |_| {
                            *llm_client.write() = provider.to_string();
                            let current_model = llm_model.read().clone();
                            let models = llm_models_for(provider);
                            if !models.contains(&current_model.as_str()) {
                                if let Some(default_model) = models.first() {
                                    *llm_model.write() = default_model.to_string();
                                }
                            }
                        })
                        .child(label)
                )
            }
        );

        let model_buttons = {
            let provider = llm_client.read().clone();
            llm_models_for(provider.as_str())
                .iter()
                .fold(rect().horizontal().width(Size::fill()).spacing(6.0), |container, &model| {
                    let mut model_state = llm_model.clone();
                    container.child(
                        Button::new()
                            .flat()
                            .with_corner_radius(6.0)
                            .on_press(move |_| {
                                *model_state.write() = model.to_string();
                            })
                            .child(model)
                    )
                })
        };

        let selected_provider = llm_client.read().clone();
        let selected_model = llm_model.read().clone();

        let content = rect()
            .vertical()
            .width(Size::fill())
            .child(rect().width(Size::fill()).child("LLM Configuration"))
            .child(
                rect()
                    .width(Size::fill())
                    .child(
                        MarkdownViewer::new(
                            "Markitdown-rs supports image descriptions through the OpenAI, Gemini and Deepseek providers. Choose a provider and enter a model name. The model field accepts any provider-specific model string."
                        )
                        .width(Size::fill())
                    )
            )
            .child(rect().height(Size::px(16.0)))
            .child(
                Input::new(llm_api_key.clone())
                    .placeholder(
                        "API Key (set env var OPENAI_API_KEY, GEMINI_API_KEY or DEEPSEEK_API_KEY)"
                    )
                    .width(Size::fill())
                    .auto_focus(true)
            )
            .child(rect().height(Size::px(16.0)))
            .child(rect().width(Size::fill()).child("Provider:"))
            .child(provider_buttons)
            .child(rect().height(Size::px(16.0)))
            .child(rect().width(Size::fill()).child("Model (free text):"))
            .child(
                Input::new(llm_model.clone())
                    .placeholder("Model name, e.g. gemini-2.0-flash or gpt-4o")
                    .width(Size::fill())
            )
            .child(rect().height(Size::px(8.0)))
            .child(rect().width(Size::fill()).child("Suggested example models:"))
            .child(
                rect()
                    .horizontal()
                    .width(Size::fill())
                    .spacing(8.0)
                    .child(model_buttons)
            )
            .child(rect().height(Size::px(16.0)))
            .child(
                rect()
                    .horizontal()
                    .width(Size::fill())
                    .main_align(Alignment::Center)
                    .child(
                        Button::new()
                            .flat()
                            .with_corner_radius(6.0)
                            .on_press(move |_| {
                                close_popup_done.set(false);
                                save_config_done();
                            })
                            .child("Done")
                    )
            )
            .child(rect().height(Size::px(8.0)))
            .child(
                rect()
                    .width(Size::fill())
                    .child(
                        format!(
                            "Selected provider: {} | Selected model: {}",
                            if selected_provider.is_empty() {
                                "none"
                            } else {
                                selected_provider.as_str()
                            },
                            if selected_model.is_empty() {
                                "none"
                            } else {
                                selected_model.as_str()
                            }
                        )
                    )
            );

        let popup_own = PopupOwn::new_with_state(
            show_popup.clone(),
            "LLM Settings".to_string(),
            true,
            content,
            Some(save_config.clone())
        ).make();

        Self {
            show_popup,
            popup: popup_own.popup,
        }
    }
}
