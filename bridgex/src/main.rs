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
 * Last Modified: Monday, 27th April 2026 10:03:09 pm
 * Modified By: tutosrive (tutosriveorg@gmail.com)
 * -----
 */

// Prevent console window in addition to Slint window in Windows release builds when, e.g., starting the app via file manager. Ignored on other platforms.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::{ error::Error, fs, io::{ BufRead, BufReader }, path::PathBuf };
use rfd::FileDialog;
use slint::{ ModelRc, SharedString, ToSharedString, VecModel };

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
            let lines = load_license_file_lines(license_name.as_str()).unwrap();
            ui.global::<LicenseDialogData>().set_content_lines(lines);
        }
    });

    ui.run()?;

    Ok(())
}

/**
fn load_license_file(name: &str) -> Result<SharedString, Box<dyn Error>> {
    let real_name = if name == "Bridgex" { "gnu3".to_string() } else { name.to_lowercase() };
    let path: PathBuf = PathBuf::from(env!("CARGO_MANIFEST_DIR")).join("src").join("assets").join("licenses").join(format!("license_{}.txt", real_name));

    let readed = fs::read_to_string(path)?;
    Ok(readed.to_shared_string())
}
**/

fn load_license_file_lines(name: &str) -> Result<ModelRc<SharedString>, Box<dyn Error>> {
    let real_name = if name == "Bridgex" { "gnu3".to_string() } else { name.to_lowercase() };
    let path: PathBuf = PathBuf::from(env!("CARGO_MANIFEST_DIR")).join("src").join("assets").join("licenses").join(format!("license_{}.txt", real_name));

    let file = fs::File::open(path)?;
    let reader = BufReader::new(file);
    let mut content_lines = Vec::new();

    for line in reader.lines() {
        content_lines.push(line.unwrap().to_shared_string());
    }

    let data = ModelRc::new(VecModel::from(content_lines));
    Ok(data)
}
