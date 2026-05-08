use freya::{ elements::rect::rect, prelude::* };
use crate::utils::{ helpers::create_img_source };

pub struct PopupOwn<T: IntoElement + ToString> {
    content: Option<T>,
    width: Option<Size>,
    title: Option<String>,
    show_btn_close: Option<bool>,
    show_popup: Option<State<bool>>,
    pub popup: Option<Popup>,
    show_img_after_header: Option<bool>,
    img_name: Option<String>,
}

impl<T: IntoElement + ToString> PopupOwn<T> {
    pub fn new(show_popup: State<bool>, title: String, show_close: bool, content: T) -> Self {
        Self {
            content: Some(content),
            width: Some(Size::px(400.0)),
            title: Some(title),
            show_btn_close: Some(show_close),
            show_popup: Some(show_popup),
            popup: None,
            show_img_after_header: None,
            img_name: None,
        }
    }

    pub fn show_img_after_header(mut self, img_name: String) -> Self {
        self.img_name = Some(img_name);
        self.show_img_after_header = Some(true);
        self
    }

    pub fn make(mut self) -> Self {
        let image_child = if self.show_img_after_header.unwrap_or(false) {
            self.img_name
                .as_ref()
                .map(|img_name| {
                    ImageViewer::new(create_img_source(img_name.as_str())).width(Size::px(100.0))
                })
        } else {
            None
        };

        self.popup = Some(
            Popup::new()
                .show(self.show_popup.unwrap())
                .width(Size::px(400.0))
                .on_close_request(move |_| {
                    self.show_popup.unwrap().toggle();
                })
                .child(PopupTitle::new(self.title.clone().unwrap()))
                .child(
                    PopupContent::new()
                        .maybe_child(image_child)
                        .child(
                            rect()
                                .max_height(Size::px(400.0))
                                .child(
                                    ScrollView::new()
                                        .child(self.content.take().unwrap())
                                        .show_scrollbar(false)
                                )
                        )
                )
                .child(
                    rect()
                        .child(
                            PopupButtons::new().child(
                                Button::new()
                                    .on_press(move |_| {
                                        self.show_popup.unwrap().toggle();
                                    })
                                    .child("Close")
                            )
                        )
                        .horizontal()
                        .width(Size::fill())
                )
        );

        self
    }
}
