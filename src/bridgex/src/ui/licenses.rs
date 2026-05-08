use std::fs;
use freya::{ elements::rect::rect, prelude::* };
use crate::ui::popup::PopupOwn;
use crate::utils::constants::dir_root;
use crate::utils::helpers::open_url;

pub struct LicencesPopup {
    pub show_popup: State<bool>,
    pub popup: Option<Popup>,
}

impl LicencesPopup {
    pub fn new() -> Self {
        let show_popup = use_state(|| false);
        let current_license = use_state(|| String::from("Select a licence to view."));
        let mut current_license_url = use_state(|| String::from("https://opensource.org/licenses"));

        let current_license_url_button = current_license_url.clone();
        let mut bridgex_license = current_license.clone();
        let mut markitdown_license = current_license.clone();
        let mut freya_license = current_license.clone();

        let content = rect()
            .vertical()
            .width(Size::px(500.0))
            .height(Size::px(500.0))
            .padding(Gaps::new(20.0, 20.0, 20.0, 20.0))
            .child(
                rect()
                    .horizontal()
                    .width(Size::fill())
                    .main_align(Alignment::End)
                    .child(
                        Button::new()
                            .flat()
                            .with_corner_radius(8.0)
                            .on_press(move |_| {
                                open_url(&current_license_url_button.read());
                            })
                            .child(
                                ImageViewer::new(("os", include_bytes!("../assets/images/os.svg")))
                                    .width(Size::px(28.0))
                                    .height(Size::px(28.0))
                            )
                    )
            )
            .child(
                rect()
                    .horizontal()
                    .width(Size::fill())
                    .main_align(Alignment::Center)
                    .spacing(10.0)
                    .child(
                        Button::new()
                            .flat()
                            .with_corner_radius(6.0)
                            .on_press(move |_| {
                                bridgex_license.set(load_license("licence_bridgex.txt"));
                                current_license_url.set(
                                    String::from(
                                        "https://github.com/Dev2Forge/bridgex/blob/main/LICENSE"
                                    )
                                );
                            })
                            .child("Bridgex")
                    )
                    .child(
                        Button::new()
                            .flat()
                            .with_corner_radius(6.0)
                            .on_press(move |_| {
                                markitdown_license.set(load_license("license_markitdown-rs.txt"));
                                current_license_url.set(
                                    String::from(
                                        "https://github.com/uhobnil/markitdown-rs/blob/master/LICENSE"
                                    )
                                );
                            })
                            .child("Markitdown-rs")
                    )
                    .child(
                        Button::new()
                            .flat()
                            .with_corner_radius(6.0)
                            .on_press(move |_| {
                                freya_license.set(load_license("license_freya.txt"));
                                current_license_url.set(
                                    String::from(
                                        "https://github.com/marc2332/freya/blob/main/LICENSE.md"
                                    )
                                );
                            })
                            .child("FreyaUI")
                    )
            )
            .child(
                rect()
                    .width(Size::fill())
                    .height(Size::px(380.0))
                    .border(Border::new().width(1.0).fill(Color::BLACK))
                    .padding(Gaps::new(10.0, 10.0, 10.0, 10.0))
                    .child(
                        ScrollView::new()
                            .show_scrollbar(false)
                            .child(MarkdownViewer::new(current_license.read().clone()))
                    )
            );

        let mut popup_own = PopupOwn::new_with_state(
            show_popup.clone(),
            "Licences".to_string(),
            true,
            content
        ).make();

        Self {
            show_popup,
            popup: popup_own.popup,
        }
    }
}

fn load_license(file_name: &str) -> String {
    let file_path = dir_root().join(file_name);
    match fs::read_to_string(file_path) {
        Ok(text) if !text.is_empty() => text,
        Ok(_) => String::from("The licence file is empty."),
        Err(err) => format!("Could not load licence: {}", err),
    }
}
