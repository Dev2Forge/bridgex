use std::path::PathBuf;

pub const DOCUMENT_EXTENSIONS: [&str; 5] = ["pdf", "pptx", "xlsx", "csv", "docx"];

pub fn dir_root() -> PathBuf {
    std::env
        ::current_exe()
        .ok()
        .and_then(|p| p.parent().map(|p| p.to_path_buf()))
        .unwrap()
}

pub fn dir_root_images() -> PathBuf {
    dir_root().join("files").join("assets").join("images")
}
