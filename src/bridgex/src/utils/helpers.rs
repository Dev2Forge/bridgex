use freya::components::ImageSource;
use crate::utils::constants::{ dir_root_images };

pub fn create_img_source(img_name: &str) -> ImageSource {
    let path = dir_root_images().join(img_name);
    dbg!(path.to_str());
    let source: ImageSource = path.into();
    source
}
