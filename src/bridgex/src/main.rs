#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod components;
mod logic;
mod utils;

use freya::{ code_editor::{ CodeEditor, CodeEditorData }, prelude::*, text_edit::Rope };
use rfd::FileDialog;
use crate::components::{ popup::PopupOwn };
use crate::logic::{ converter };

fn app() -> impl IntoElement {
    use_init_theme(dark_theme);

    const MENU_HEIGHT: f32 = 30.0;
    let menu_bg: Color = Color::from_hex("#000000").unwrap();

    let mut showpopup = use_state(|| false);

    let submenu_position_file: Position = Position::new_absolute()
        .top(MENU_HEIGHT + 1.0)
        .left(2.0);
    let submenu_position_help: Position = Position::new_absolute()
        .top(MENU_HEIGHT + 1.0)
        .left(10.0);

    let focus = use_focus();

    let mut editor = use_state(|| {
        let mut editor = CodeEditorData::new("".into(), freya::code_editor::LanguageId::Markdown);
        editor.parse();
        editor
    });

    let mut menu_item_clicked = use_state(|| false);
    let mut current_menu = use_state(|| String::new());

    let menu_ctn = rect()
        .horizontal()
        .padding(Gaps::new(0.0, 0.0, 0.0, 4.0))
        .height(Size::px(30.0))
        .width(Size::fill())
        .child(
            rect()
                .child(
                    Button::new()
                        .on_press(move |_| {
                            *menu_item_clicked.write() = true;
                        })
                        .flat()
                        .with_corner_radius(0.0)
                        .child("File")
                        .padding(Gaps::new(2.0, 4.0, 2.0, 4.0))
                )
                .on_pointer_over(move |_| {
                    *current_menu.write() = "file".to_string();
                })
                .maybe_child(
                    (*menu_item_clicked.read() && *current_menu.read() == "file".to_string()).then(
                        || {
                            rect()
                                .position(submenu_position_file)
                                .child(
                                    Menu::new()
                                        .child(
                                            MenuButton::new()
                                                .child("Open")
                                                .on_press(move |_| {
                                                    let file = FileDialog::new()
                                                        .add_filter(
                                                            "Documents",
                                                            &[
                                                                "pdf".to_string(),
                                                                "zip".to_string(),
                                                                "csv".to_string(),
                                                                "html".to_string(),
                                                            ]
                                                        )
                                                        .pick_file();

                                                    let mut filename = String::new();

                                                    if let Some(path) = file {
                                                        filename = path
                                                            .to_str()
                                                            .unwrap()
                                                            .to_string();
                                                    }

                                                    editor.write().rope = Rope::from_str(
                                                        &converter
                                                            ::convert_from_path(filename.as_str())
                                                            .as_str()
                                                    );
                                                })
                                        )
                                        .on_close(move |_| {
                                            menu_item_clicked.toggle();
                                            *current_menu.write() = String::new();
                                        })
                                )
                        }
                    )
                )
        )
        .child(
            rect()
                .child(
                    Button::new()
                        .on_press(move |_| {
                            *menu_item_clicked.write() = true;
                        })
                        .flat()
                        .with_corner_radius(0.0)
                        .child("Help")
                        .padding(Gaps::new(2.0, 4.0, 2.0, 4.0))
                )
                .maybe_child(
                    (*menu_item_clicked.read() && *current_menu.read() == "help".to_string()).then(
                        || {
                            rect()
                                .position(submenu_position_help)
                                .child(
                                    Menu::new()
                                        .on_close(move |_| {
                                            menu_item_clicked.toggle();
                                            *current_menu.write() = String::new();
                                            showpopup.toggle();
                                        })
                                        .child(MenuButton::new().child("Licenses"))
                                )
                        }
                    )
                )
                .on_pointer_over(move |_| {
                    *current_menu.write() = "help".to_string();
                })
        )
        .background(menu_bg);

    rect()
        .child(menu_ctn)
        .child(
            rect()
                .child(
                    PopupOwn::new(
                        showpopup,
                        "Licenses".to_string(),
                        true,
                        "This is a FUCK example trying refactoring usin modular files"
                    )
                        .show_img_after_header("icon.png".to_string())
                        .make()
                        .popup.unwrap()
                )
                .max_height(Size::px(400.0))
        )
        .width(Size::fill())
        .child(
            rect()
                .child(
                    rect()
                        .child(
                            rect()
                                .child(
                                    CodeEditor::new(editor.into_writable(), focus.a11y_id())
                                        .a11y_auto_focus(true)
                                        .font_family("Consolas")
                                        .gutter(false)
                                )
                                .width(Size::percent(50.0))
                        )
                        .child(
                            ScrollView::new()
                                .child(
                                    MarkdownViewer::new(editor.read().rope.to_string()).padding(
                                        Gaps::new_all(10.0)
                                    )
                                )
                                .width(Size::percent(50.0))
                        )
                        .horizontal()
                        .width(Size::fill())
                )
                .padding(Gaps::new_all(10.0))
        )
        .expanded()
}

fn main() {
    launch(
        LaunchConfig::new().with_window(WindowConfig::new(app).with_title("Bridgex - Rust + Freya"))
    )
}
