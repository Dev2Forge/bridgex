use freya::prelude::*;
use crate::utils::constants::MENU_HEIGHT;

pub struct MenuBarOwn {
    menu_bg: Color,
    showpopup: State<bool>,
    menu_item_clicked: State<bool>,
    current_hover_menu: State<String>,
    submenu_file_position: Position,
    submenu_help_position: Position,
}

impl MenuBarOwn {
    pub fn new(background: Option<String>) -> Self {
        let bg: String;
        if let Some(color) = background {
            bg = color;
        } else {
            bg = String::from("#000000");
        }

        Self {
            menu_bg: Color::from_hex(bg.as_str()).unwrap(),
            showpopup: use_state(|| false),
            menu_item_clicked: use_state(|| false),
            current_hover_menu: use_state(|| String::new()),
            submenu_file_position: Position::new_absolute()
                .top(MENU_HEIGHT + 1.0)
                .left(2.0),
            submenu_help_position: Position::new_absolute()
                .top(MENU_HEIGHT + 1.0)
                .left(8.0),
        }
    }

    pub fn menu_bar(&self) -> impl IntoElement {
        let menu_item_clicked = self.menu_item_clicked.clone();
        let current_hover_menu = self.current_hover_menu.clone();
        let showpopup = self.showpopup.clone();
        let submenu_file_position = self.submenu_file_position.clone();
        let submenu_help_position = self.submenu_help_position.clone();

        rect()
            .horizontal()
            .padding(Gaps::new(0.0, 0.0, 0.0, 4.0))
            .height(Size::px(30.0))
            .width(Size::fill())
            .child(
                rect()
                    .child(
                        Button::new()
                            .on_press(move |_| {
                                *menu_item_clicked.clone().write() = true;
                            })
                            .flat()
                            .with_corner_radius(0.0)
                            .child("File")
                            .padding(Gaps::new(2.0, 4.0, 2.0, 4.0))
                    )
                    .on_pointer_over(move |_| {
                        *current_hover_menu.clone().write() = "file".to_string();
                    })
                    .maybe_child(
                        (
                            *menu_item_clicked.read() &&
                            *current_hover_menu.read() == "file".to_string()
                        ).then(|| {
                            self.submenu_file(
                                submenu_file_position,
                                menu_item_clicked,
                                current_hover_menu
                            )
                        })
                    )
            )
            .child(
                rect()
                    .child(
                        Button::new()
                            .on_press(move |_| {
                                *menu_item_clicked.clone().write() = true;
                            })
                            .flat()
                            .with_corner_radius(0.0)
                            .child("Help")
                            .padding(Gaps::new(2.0, 4.0, 2.0, 4.0))
                    )
                    .maybe_child(
                        (
                            *menu_item_clicked.read() &&
                            *current_hover_menu.read() == "help".to_string()
                        ).then(|| {
                            self.submenu_help(
                                submenu_help_position,
                                current_hover_menu,
                                menu_item_clicked,
                                showpopup
                            )
                        })
                    )
                    .on_pointer_over(move |_| {
                        *current_hover_menu.clone().write() = "help".to_string();
                    })
            )
            .background(self.menu_bg)
    }

    fn submenu_file(
        &self,
        submenu_file_position: Position,
        mut menu_item_clicked: State<bool>,
        mut current_hover_menu: State<String>
    ) -> impl IntoElement {
        rect()
            .position(submenu_file_position)
            .child(
                Menu::new()
                    .child(
                        MenuButton::new()
                            .child("Open")
                            .on_press(
                                move |_| {
                                    // let file = FileDialog::new()
                                    //     .add_filter(
                                    //         "Documents",
                                    //         &[
                                    //             "pdf".to_string(),
                                    //             "zip".to_string(),
                                    //             "csv".to_string(),
                                    //             "html".to_string(),
                                    //         ]
                                    //     )
                                    //     .pick_file();

                                    // let mut filename = String::new();

                                    // if let Some(path) = file {
                                    //     filename = path
                                    //         .to_str()
                                    //         .unwrap()
                                    //         .to_string();
                                    // }

                                    // editor.write().rope = Rope::from_str(
                                    //     &converter
                                    //         ::convert_from_path(filename.as_str())
                                    //         .as_str()
                                    // );
                                }
                            )
                    )
                    .on_close(
                        move |_| {
                            // self.reset_menu_states();
                        }
                    )
            )
    }

    fn submenu_help(
        &self,
        submenu_help_position: Position,
        mut current_hover_menu: State<String>,
        mut menu_item_clicked: State<bool>,
        mut showpopup: State<bool>
    ) -> impl IntoElement {
        rect()
            .position(submenu_help_position)
            .child(
                Menu::new()
                    .on_close(move |_| {
                        // self.reset_menu_states();
                        showpopup.toggle();
                    })
                    .child(
                        MenuButton::new()
                            .child("Licenses")
                            .on_press(move |_| {
                                self.reset_menu_states();
                                showpopup.toggle();
                            })
                    )
            )
    }

    fn reset_menu_states(&self) {
        self.menu_item_clicked.clone().toggle();
        *self.current_hover_menu.clone().write() = String::new();
    }
}
