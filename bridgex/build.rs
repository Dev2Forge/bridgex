/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosriveorg@gmail.com)
 *
 * File: \build.rs
 * Created: Saturday, 25th April 2026 11:34:53 pm
 * -----
 * Last Modified: Monday, 27th April 2026 12:02:07 am
 * Modified By: tutosrive (tutosriveorg@gmail.com)
 * -----
 */

fn main() {
    slint_build::compile("ui/app-window.slint").expect("Slint build failed");
}
