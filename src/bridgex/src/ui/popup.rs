use freya::{ elements::rect::rect, prelude::* };

pub struct PopupOwn<T: IntoElement> {
    content: Option<T>,
    title: Option<String>,
    show_btn_close: bool,
    pub show_popup: State<bool>,
    pub popup: Option<Popup>,
}

impl<T: IntoElement> PopupOwn<T> {
    pub fn new(title: String, show_close: bool, content: T) -> Self {
        Self {
            content: Some(content),
            title: Some(title),
            show_btn_close: show_close,
            show_popup: use_state(|| false),
            popup: None,
        }
    }

    pub fn new_with_state(
        show_popup: State<bool>,
        title: String,
        show_close: bool,
        content: T
    ) -> Self {
        Self {
            content: Some(content),
            title: Some(title),
            show_btn_close: show_close,
            show_popup,
            popup: None,
        }
    }

    pub fn make(mut self) -> Self {
        let show_popup = self.show_popup.clone();
        let mut close_popup = self.show_popup.clone();

        let mut popup = Popup::new()
            .show(show_popup.clone())
            .width(Size::px(500.0))
            .on_close_request(move |_| {
                close_popup.set(false);
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
                                    close_button_popup.set(false);
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
