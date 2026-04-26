/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosriveorg@gmail.com)
 *
 * File: \src-tauri\src\lib.rs
 * Created: Monday, 20th April 2026 7:16:28 am
 * -----
 * Last Modified: Friday, 24th April 2026 2:34:51 pm
 * Modified By: tutosrive (tutosriveorg@gmail.com)
 * -----
 */

use markitdown::MarkItDown;
use tauri::Manager;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn convert_from_path(filename: &str) -> String {
    let mark = MarkItDown::new();
    let res = mark.convert(filename, None);

    if let Ok(Some(conversion_result)) = res {
        conversion_result.text_content
    } else {
        "Unsupported File".to_string()
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder
        ::default()
        .setup(|app| {
            let _window = app.get_webview_window("main").unwrap();
            Ok(())
        })
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, convert_from_path])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
