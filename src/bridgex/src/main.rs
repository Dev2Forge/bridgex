#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod app;
mod logic;
mod theme;
mod ui;
mod utils;

use freya::prelude::*;
use app::app;

fn main() {
    launch(
        LaunchConfig::new().with_window(
            WindowConfig::new(app)
                .with_title("Bridgex - Rust + Freya")
                .with_background(theme::GITHUB_COLORS.background)
                .with_min_size(900.0, 700.0)
        )
    )
}
