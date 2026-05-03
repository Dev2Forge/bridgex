#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use egui_commonmark::CommonMarkCache;
use markitdown::MarkItDown;

struct App {
    mark_cache: CommonMarkCache,
    content: String,
}

impl App {}

fn main()-> {}

fn open_file() -> String {
    let file = FileDialog::new()
        .add_filter(
            "Documents",
            &[
                "pdf".to_string(),
                "zip".to_string(),
                "csv".to_string(),
                "html".to_string(),
            ],
        )
        .pick_file();

    let mut filename = String::new();

    if let Some(path) = file {
        filename = path.to_str().unwrap().to_string();
    }
    filename
}

fn convert_from_path(filename: &str) -> String {
    let mark = MarkItDown::new();
    let res = mark.convert(filename, None);
    dbg!(filename);

    if let Ok(Some(conversion_result)) = res {
        dbg!(&conversion_result.text_content);
        conversion_result.text_content
    } else {
        dbg!("Dentro de else");
        "Try open the file again".to_string()
    }
}
