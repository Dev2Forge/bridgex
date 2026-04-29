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
 * Last Modified: Tuesday, 28th April 2026 10:40:40 pm
 * Modified By: tutosrive (tutosriveorg@gmail.com)
 * -----
 */

// Prevent console window in addition to Slint window in Windows release builds when, e.g., starting the app via file manager. Ignored on other platforms.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::{ error::Error, fs, path::PathBuf };
use rfd::FileDialog;
use slint::{ SharedString, ToSharedString };

slint::include_modules!();
fn main() -> Result<(), Box<dyn Error>> {
    let ui = AppWindow::new()?;
    let ui_weak = ui.as_weak();

    ui.on_request_file_open({
        let weak = ui_weak.clone();

        move || {
            let ui = weak.upgrade().unwrap();

            let file = FileDialog::new().add_filter("Documents", &["pdf".to_string()]).pick_file();
            let mut filename = SharedString::new();

            if let Some(path) = file {
                filename = path.to_str().unwrap().to_shared_string();
            }

            ui.set_filename(ui.get_filename() + filename.as_str())
        }
    });

    ui.on_request_license_content({
        let weak = ui_weak.clone();

        move || {
            let ui = weak.upgrade().unwrap();
            let license_name = ui.global::<LibrariesData>().get_library_name();
            let content = load_license_file(license_name.as_str()).unwrap();
            ui.global::<LicenseDialogData>().set_content(content);
        }
    });

    ui.on_request_update_optimized_content({
        let weak = ui_weak.clone();

        move || {
            let ui = weak.upgrade().unwrap();
            let mut current_start_char = ui.global::<LicenseDialogData>().get_current_start_char_parcial_content() as usize;
            let mut current_end_char = ui.global::<LicenseDialogData>().get_current_end_char_parcial_content() as usize;
            let complete_content = ui.global::<LicenseDialogData>().get_content();
            let parcial_content_global = ui.global::<LicenseDialogData>().get_content_optimized();

            let parcial_content: String = complete_content.chars().skip(current_start_char).take(current_end_char).collect();
            ui.global::<LicenseDialogData>().set_content_optimized(parcial_content_global + &parcial_content);

            current_start_char = current_end_char;
            current_end_char += 1100;

            ui.global::<LicenseDialogData>().set_current_start_char_parcial_content(current_start_char as i32);
            ui.global::<LicenseDialogData>().set_current_end_char_parcial_content(current_end_char as i32);
        }
    });

    ui.run()?;

    Ok(())
}

fn load_license_file(name: &str) -> Result<SharedString, Box<dyn Error>> {
    let real_name = if name == "Bridgex" { "gnu3".to_string() } else { name.to_lowercase() };
    let path: PathBuf = PathBuf::from(env!("CARGO_MANIFEST_DIR")).join("src").join("assets").join("licenses").join(format!("license_{}.txt", real_name));

    let readed = fs::read_to_string(path)?;
    Ok(readed.to_shared_string())
}
