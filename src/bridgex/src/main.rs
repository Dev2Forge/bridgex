#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use freya::{ code_editor::{ CodeEditor, CodeEditorData }, prelude::*, text_edit::Rope };
use markitdown::MarkItDown;
use rfd::FileDialog;

fn popup(mut show_popup: State<bool>) -> impl IntoElement {
    let img_source: ImageSource = (
        "Bridgex Logo",
        include_bytes!("assets/images/logo-bridgex-2.webp"),
    ).into();

    Popup::new()
        .show(show_popup)
        .width(Size::px(400.0))
        .on_close_request(move |_| {
            show_popup.toggle();
        })
        .child(PopupTitle::new("Licenses".to_string()))
        .child(
            PopupContent::new()
                .child("This is a simple POP!!!!")
                .child(ImageViewer::new(img_source).width(Size::px(100.0)))
                .child(
                    ScrollView::new()
                        .child(
                            MarkdownViewer::new(include_str!("assets/licenses/license_gnu3.txt"))
                        )
                        .height(Size::px(200.0))
                        .direction(Direction::Vertical)
                )
        )
        .child(
            PopupButtons::new().child(
                Button::new()
                    .on_press(move |_| {
                        show_popup.toggle();
                    })
                    .child("Close")
            )
        )
}

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

    let mut content_file = use_state(|| String::new());

    let focus = use_focus();
    let mut editor = use_state(|| {
        let mut editor = CodeEditorData::new("".into(), freya::code_editor::LanguageId::Markdown);
        editor.parse();
        editor
    });

    *content_file.write() = editor.read().to_string();

    let mut menu_item_clicked = use_state(|| false);
    let mut current_menu = use_state(|| String::new());

    let mut msg = use_state(|| "Will contain click messages");

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
                            *msg.write() = "File";
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

                                                    // *content_file.write() = convert_from_path(
                                                    //     filename.as_str()
                                                    // ).to_string();

                                                    editor.write().rope = Rope::from_str(
                                                        convert_from_path(
                                                            filename.as_str()
                                                        ).as_str()
                                                    );

                                                    dbg!(content_file.read().clone());
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
                            *msg.write() = "Help";
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
        .child(popup(showpopup))
        .width(Size::fill())
        .child(
            rect()
                .child(MarkdownViewer::new(msg()))
                .child(
                    rect()
                        // .child(Input::new(content_file).placeholder("Type here ...").filled().width(Size::Pixels(100.)))
                        .child(
                            rect()
                                .child(CodeEditor::new(editor, focus.a11y_id()))
                                .width(Size::px(300.0))
                        )
                        .child(
                            ScrollView::new()
                                .width(Size::fill())
                                .child(MarkdownViewer::new(content_file.read().clone()))
                        )
                        .horizontal()
                        .width(Size::fill())
                )
                .padding(Gaps::new_all(10.0))
        )
        .expanded()
}

fn convert_from_path(filename: &str) -> String {
    let mark = MarkItDown::new();
    let res = mark.convert(filename, None);
    dbg!(filename);

    if let Ok(Some(conversion_result)) = res {
        dbg!(&conversion_result.text_content);
        conversion_result.text_content
    } else {
        dbg!("Dentro de else");
        "Try open the file again".to_string()
    }
}

fn main() {
    launch(
        LaunchConfig::new().with_window(WindowConfig::new(app).with_title("Bridgex - Rust + Freya"))
    )
}
