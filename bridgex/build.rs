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
 * Last Modified: Monday, 27th April 2026 10:05:40 pm
 * Modified By: tutosrive (tutosriveorg@gmail.com)
 * -----
 */

fn main() {
    let config = slint_build::CompilerConfiguration::new().with_style("material".into());

    slint_build::compile_with_config("ui/app-window.slint", config).expect("Slint build failed");
}
