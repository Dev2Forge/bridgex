use freya::prelude::*;
use crate::utils::{ constants::MENU_HEIGHT, files::{ FileOwn, Filter } };

const FILE_MENU: &str = "file";
const HELP_MENU: &str = "help";

pub struct MenuBarOwn {
    menu_bg: Color,
    menu_item_clicked: State<bool>,
    current_menu: State<String>,
    open_file_state: State<Option<FileOwn>>,
    show_about: State<bool>,
    show_licenses: State<bool>,
    submenu_file_position: Position,
    submenu_help_position: Position,
}

impl MenuBarOwn {
    pub fn new(
        open_file_state: State<Option<FileOwn>>,
        show_about: State<bool>,
        show_licenses: State<bool>,
        background: Option<String>
    ) -> Self {
        let bg = background.unwrap_or_else(|| String::from("#000000"));

        Self {
            menu_bg: Color::from_hex(bg.as_str()).unwrap_or(Color::from_rgb(0, 0, 0)),
            menu_item_clicked: use_state(|| false),
            current_menu: use_state(|| String::new()),
            open_file_state,
            show_about,
            show_licenses,
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
        let current_menu = self.current_menu.clone();
        let file_position = self.submenu_file_position.clone();
        let help_position = self.submenu_help_position.clone();

        rect()
            .horizontal()
            .height(Size::px(MENU_HEIGHT))
            .width(Size::fill())
            .background(self.menu_bg)
            .child(
                rect()
                    .on_pointer_over({
                        let menu_item_clicked = menu_item_clicked.clone();
                        let mut current_menu = current_menu.clone();
                        move |_| {
                            if *menu_item_clicked.read() {
                                *current_menu.write() = FILE_MENU.to_string();
                            }
                        }
                    })
                    .child(
                        top_menu_button(
                            "File",
                            menu_item_clicked.clone(),
                            current_menu.clone(),
                            FILE_MENU
                        )
                    )
                    .maybe_child(
                        (
                            *menu_item_clicked.read() && current_menu.read().as_str() == FILE_MENU
                        ).then(|| self.submenu_file(file_position))
                    )
            )
            .child(
                rect()
                    .on_pointer_over({
                        let menu_item_clicked = menu_item_clicked.clone();
                        let mut current_menu = current_menu.clone();
                        move |_| {
                            if *menu_item_clicked.read() {
                                *current_menu.write() = HELP_MENU.to_string();
                            }
                        }
                    })
                    .child(
                        top_menu_button(
                            "Help",
                            menu_item_clicked.clone(),
                            current_menu.clone(),
                            HELP_MENU
                        )
                    )
                    .maybe_child(
                        (
                            *menu_item_clicked.read() && current_menu.read().as_str() == HELP_MENU
                        ).then(|| self.submenu_help(help_position))
                    )
            )
    }

    fn submenu_file(&self, submenu_file_position: Position) -> impl IntoElement {
        let mut open_file_state = self.open_file_state.clone();
        let menu_item_clicked = self.menu_item_clicked.clone();
        let current_menu = self.current_menu.clone();

        rect()
            .position(submenu_file_position)
            .child(
                Menu::new()
                    .child(
                        MenuButton::new()
                            .child("Save")
                            .on_press(move |_| {
                                close_menu(menu_item_clicked.clone(), current_menu.clone());
                            })
                    )
                    .child(
                        MenuButton::new()
                            .child("Open")
                            .on_press(move |_| {
                                if let Some(file) = open_file() {
                                    *open_file_state.write() = Some(file);
                                }
                                close_menu(menu_item_clicked.clone(), current_menu.clone());
                            })
                    )
                    .child(
                        MenuButton::new()
                            .child("Exit")
                            .on_press(move |_| {
                                close_menu(menu_item_clicked.clone(), current_menu.clone());
                            })
                    )
                    .on_close(move |_| {
                        close_menu(menu_item_clicked.clone(), current_menu.clone());
                    })
            )
    }

    fn submenu_help(&self, submenu_help_position: Position) -> impl IntoElement {
        let mut show_about = self.show_about.clone();
        let mut show_licenses = self.show_licenses.clone();
        let menu_item_clicked = self.menu_item_clicked.clone();
        let current_menu = self.current_menu.clone();

        rect()
            .position(submenu_help_position)
            .child(
                Menu::new()
                    .child(
                        MenuButton::new()
                            .child("About")
                            .on_press(move |_| {
                                show_about.toggle();
                                close_menu(menu_item_clicked.clone(), current_menu.clone());
                            })
                    )
                    .child(
                        MenuButton::new()
                            .child("Licenses")
                            .on_press(move |_| {
                                show_licenses.toggle();
                                close_menu(menu_item_clicked.clone(), current_menu.clone());
                            })
                    )
                    .on_close(move |_| {
                        close_menu(menu_item_clicked.clone(), current_menu.clone());
                    })
            )
    }
}

fn top_menu_button(
    label: &'static str,
    mut menu_item_clicked: State<bool>,
    mut current_menu: State<String>,
    menu_name: &'static str
) -> impl IntoElement {
    Button::new()
        .flat()
        .with_corner_radius(0.0)
        .child(label)
        .padding(Gaps::new(2.0, 10.0, 2.0, 10.0))
        .on_press(move |_| {
            let current = current_menu.read().as_str().to_string();

            if !*menu_item_clicked.read() {
                menu_item_clicked.toggle();
                *current_menu.write() = menu_name.to_string();
            } else if current == menu_name {
                menu_item_clicked.toggle();
                *current_menu.write() = String::new();
            } else {
                *current_menu.write() = menu_name.to_string();
            }
        })
}

fn close_menu(mut menu_item_clicked: State<bool>, mut current_menu: State<String>) {
    if *menu_item_clicked.read() {
        menu_item_clicked.toggle();
    }
    *current_menu.write() = String::new();
}

fn open_file() -> Option<FileOwn> {
    let filters = vec![
        Filter::new("Documents", &["pdf", "pptx", "xlsx", "csv", "docx"]),
        Filter::new("Markdown", &["md", "markdown"])
    ];

    FileOwn::open_file_dialog(filters)
}
