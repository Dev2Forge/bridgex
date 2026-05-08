use freya::{ elements::rect::rect, prelude::* };
use crate::utils::{ helpers::create_img_source };

pub struct PopupOwn<T: IntoElement + ToString> {
    content: Option<T>,
    title: Option<String>,
    show_btn_close: bool,
    pub show_popup: State<bool>,
    pub popup: Option<Popup>,
    show_img_after_header: bool,
    img_name: Option<String>,
}

impl<T: IntoElement + ToString> PopupOwn<T> {
    pub fn new(title: String, show_close: bool, content: T) -> Self {
        Self {
            content: Some(content),
            title: Some(title),
            show_btn_close: show_close,
            show_popup: use_state(|| false),
            popup: None,
            show_img_after_header: false,
            img_name: None,
        }
    }

    pub fn show_img_after_header(mut self, img_name: String) -> Self {
        self.img_name = Some(img_name);
        self.show_img_after_header = true;
        self
    }

    pub fn make(mut self) -> Self {
        let show_popup = self.show_popup.clone();
        let mut close_popup = self.show_popup.clone();

        let image_child = if self.show_img_after_header {
            self.img_name
                .as_ref()
                .map(|img_name| {
                    ImageViewer::new(create_img_source(img_name.as_str())).width(Size::px(100.0))
                })
        } else {
            None
        };

        let mut popup = Popup::new()
            .show(show_popup.clone())
            .width(Size::px(500.0))
            .on_close_request(move |_| {
                close_popup.toggle();
            })
            .child(PopupTitle::new(self.title.clone().unwrap()))
            .child(
                PopupContent::new().child(
                    rect()
                        .width(Size::px(500.0))
                        .height(Size::px(500.0))
                        .child(
                            rect()
                                .vertical()
                                .maybe_child(image_child)
                                .child(
                                    rect()
                                        .width(Size::px(500.0))
                                        .height(Size::px(420.0))
                                        .child(
                                            ScrollView::new()
                                                .child(self.content.take().unwrap())
                                                .show_scrollbar(false)
                                        )
                                )
                        )
                )
            );

        if self.show_btn_close {
            let mut close_button_popup = self.show_popup.clone();
            popup = popup.child(
                rect()
                    .child(
                        PopupButtons::new().child(
                            Button::new()
                                .on_press(move |_| {
                                    close_button_popup.toggle();
                                })
                                .child("Close")
                        )
                    )
                    .horizontal()
                    .width(Size::fill())
            );
        }

        self.popup = Some(popup);
        self
    }
}
