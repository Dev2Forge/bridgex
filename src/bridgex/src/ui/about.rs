use freya::{ elements::rect::rect, prelude::* };
use crate::ui::popup::PopupOwn;
use crate::utils::helpers::open_url;

const VERSION: &str = env!("CARGO_PKG_VERSION");
const COPYRIGHT: &str = "Dev2Forge © 2026";
const BUY_ME_A_COFFEE_URL: &str = "https://buymeacoffee.com/tutosrive";

pub struct AboutPopup {
    pub show_popup: State<bool>,
    pub popup: Option<Popup>,
}

impl AboutPopup {
    pub fn new(show_licenses: State<bool>) -> Self {
        let show_licenses = show_licenses;
        let show_popup = use_state(|| false);
        let mut close_about = show_popup.clone();
        let mut open_licenses = show_licenses.clone();
        let description =
            "(GUI) Graphical interface for converting files to Markdown. Its objective is to simplify access to the Markitdown library through a straightforward, modular visual experience.";
        let extra_text =
            "Bridgex provides fast file import and conversion from common document formats such as PDF, DOCX, XLSX, CSV, PPTX and Markdown. The interface is designed for users who want a visual, desktop-style workflow to preview, edit and export Markdown without writing code.";

        let content = rect()
            .vertical()
            .width(Size::px(500.0))
            .height(Size::px(500.0))
            .padding(Gaps::new(20.0, 20.0, 20.0, 20.0))
            .child(
                rect()
                    .width(Size::fill())
                    .main_align(Alignment::Center)
                    .child(
                        ImageViewer::new((
                            "logo-bridgex",
                            include_bytes!("../assets/images/logo-bridgex-2.webp"),
                        )).width(Size::px(100.0))
                    )
            )
            .child(
                rect()
                    .width(Size::fill())
                    .main_align(Alignment::Center)
                    .child(
                        MarkdownViewer::new(
                            format!(
                                "{}\n\n{}\n\nVersion: {} | {}\nBy tutosrive",
                                description,
                                extra_text,
                                VERSION,
                                COPYRIGHT
                            )
                        ).padding(Gaps::new(10.0, 0.0, 10.0, 0.0))
                    )
            )
            .child(
                rect()
                    .horizontal()
                    .width(Size::fill())
                    .main_align(Alignment::Center)
                    .child(
                        Button::new()
                            .flat()
                            .with_corner_radius(6.0)
                            .on_press(move |_| {
                                close_about.toggle();
                                open_licenses.toggle();
                            })
                            .child("View Licences")
                    )
                    .child(
                        Button::new()
                            .flat()
                            .with_corner_radius(8.0)
                            .on_press(move |_| {
                                open_url(BUY_ME_A_COFFEE_URL);
                            })
                            .child(
                                ImageViewer::new((
                                    "bmacff",
                                    include_bytes!("../assets/images/bmacff.png"),
                                )).width(Size::px(120.0))
                            )
                    )
            );

        let popup_own = PopupOwn::new_with_state(
            show_popup.clone(),
            "About".to_string(),
            false,
            content
        ).make();
        Self {
            show_popup,
            popup: popup_own.popup,
        }
    }
}
