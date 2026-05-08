use freya::components::ImageSource;
use std::process::Command;
use crate::utils::constants::{ dir_root_images };

pub fn create_img_source(img_name: &str) -> ImageSource {
    let path = dir_root_images().join(img_name);
    let source: ImageSource = path.into();
    source
}

pub fn open_url(url: &str) {
    #[cfg(target_os = "windows")]
    {
        let _ = Command::new("cmd").args(["/C", "start", "", url]).spawn();
    }

    #[cfg(target_os = "macos")]
    {
        let _ = Command::new("open").arg(url).spawn();
    }

    #[cfg(all(unix, not(target_os = "macos")))]
    {
        let _ = Command::new("xdg-open").arg(url).spawn();
    }
}
