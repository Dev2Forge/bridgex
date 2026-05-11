use serde::{ Deserialize, Serialize };
use std::env;
use std::fs;
use std::io::{ self, ErrorKind };
use std::path::PathBuf;

#[derive(Serialize, Deserialize, Default)]
pub struct LLMConfig {
    pub llm_api_key: String,
    pub llm_client: String,
    pub llm_model: String,
}

impl LLMConfig {
    pub fn load() -> Self {
        let config_path = Self::config_path();
        if let Ok(contents) = fs::read_to_string(&config_path) {
            if let Ok(config) = serde_json::from_str::<LLMConfig>(&contents) {
                return config;
            }
        }
        Self::default()
    }

    pub fn save(&self) -> io::Result<()> {
        let config_path = Self::config_path();
        if let Some(parent) = config_path.parent() {
            fs::create_dir_all(parent)?;
        }
        let contents = serde_json
            ::to_string_pretty(self)
            .map_err(|err| io::Error::new(ErrorKind::Other, err.to_string()))?;
        fs::write(&config_path, contents)
    }

    fn config_path() -> PathBuf {
        if let Ok(appdata) = env::var("APPDATA") {
            return PathBuf::from(appdata).join("Bridgex").join("llm_settings.json");
        }

        if let Some(home) = env::var_os("HOME") {
            return PathBuf::from(home).join(".config").join("bridgex").join("llm_settings.json");
        }

        PathBuf::from("llm_settings.json")
    }
}
