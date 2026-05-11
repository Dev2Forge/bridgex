use freya::{ elements::rect::rect, prelude::* };
use std::rc::Rc;

pub struct PopupOwn<T: IntoElement> {
    content: Option<T>,
    title: Option<String>,
    show_btn_close: bool,
    on_close: Option<Rc<dyn Fn()>>,
    pub show_popup: State<bool>,
    pub popup: Popup,
}

impl<T: IntoElement> PopupOwn<T> {
    pub fn new_with_state(
        show_popup: State<bool>,
        title: String,
        show_close: bool,
        content: T,
        on_close: Option<Rc<dyn Fn()>>
    ) -> Self {
        Self {
            content: Some(content),
            title: Some(title),
            show_btn_close: show_close,
            on_close,
            show_popup,
            popup: Popup::new(),
        }
    }

    pub fn make(mut self) -> Self {
        let show_popup = self.show_popup.clone();
        let mut close_popup = self.show_popup.clone();
        let on_close = self.on_close.clone();

        let mut popup = Popup::new()
            .show(show_popup.clone())
            .width(Size::px(500.0))
            .on_close_request(move |_| {
                close_popup.set(false);
                if let Some(on_close) = on_close.as_ref() {
                    on_close();
                }
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
            let on_close_button = self.on_close.clone();
            popup = popup.child(
                rect()
                    .child(
                        PopupButtons::new().child(
                            Button::new()
                                .on_press(move |_| {
                                    close_button_popup.set(false);
                                    if let Some(on_close) = on_close_button.as_ref() {
                                        on_close();
                                    }
                                })
                                .child("Close")
                        )
                    )
                    .horizontal()
                    .width(Size::fill())
            );
        }

        self.popup = popup;
        self
    }
}
