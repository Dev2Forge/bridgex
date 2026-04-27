/*
 * src - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosriveorg@gmail.com)
 * 
 * File: \main.rs
 * Created: Saturday, 25th April 2026 11:34:53 pm
 * -----
 * Last Modified: Sunday, 26th April 2026 12:53:32 pm
 * Modified By: tutosrive (tutosriveorg@gmail.com)
 * -----
 */

// Prevent console window in addition to Slint window in Windows release builds when, e.g., starting the app via file manager. Ignored on other platforms.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::{ error::Error };
use rfd::FileDialog;
use slint::{ SharedString, ToSharedString };

slint::include_modules!();

fn main() -> Result<(), Box<dyn Error>> {
    let ui = AppWindow::new()?;

    ui.on_request_file_open({
        let ui_handle = ui.as_weak();
        move || {
            let file = FileDialog::new().add_filter("Documents", &["pdf".to_string()]).pick_file();
            let mut filename = SharedString::new();

            if let Some(path) = file {
                filename = path.to_str().unwrap().to_shared_string();
            }

            let ui = ui_handle.unwrap();
            ui.set_filename(ui.get_filename() + filename.as_str())
        }
    });

    ui.run()?;

    Ok(())
}
