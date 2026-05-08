#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod ui;
mod logic;
mod utils;

use freya::{ code_editor::{ CodeEditor, CodeEditorData }, prelude::*, text_edit::Rope };
use crate::ui::{ about::AboutPopup, menu::MenuBarOwn, popup::PopupOwn };
use crate::utils::files::FileOwn;

fn app() -> impl IntoElement {
    use_init_theme(dark_theme);

    let mut open_file_state = use_state(|| Option::<FileOwn>::None);

    let focus = use_focus();

    let mut popup_licenses = PopupOwn::new(
        "Licences".to_string(),
        true,
        "Third-party licences and acknowledgements will appear here."
    ).make();

    let mut about_popup = AboutPopup::new(popup_licenses.show_popup.clone());
    let show_licenses = popup_licenses.show_popup.clone();
    let show_about = about_popup.show_popup.clone();

    let mut editor = use_state(|| {
        let mut editor = CodeEditorData::new("".into(), freya::code_editor::LanguageId::Markdown);
        editor.parse();
        editor
    });

    let menu_ctn = MenuBarOwn::new(
        open_file_state.clone(),
        show_about.clone(),
        show_licenses.clone(),
        None
    );
    let menu_ctn = menu_ctn.menu_bar();

    let opened_file = open_file_state.read().clone();
    if let Some(file) = opened_file {
        let file_path = file.path().to_str().unwrap_or_default();
        let converted = crate::logic::converter::convert_from_path(file_path);
        editor.write().rope = Rope::from_str(converted.as_str());
        editor.write().parse();
        *open_file_state.write() = None;
    }

    rect()
        .child(menu_ctn)
        .child(
            rect()
                .child(popup_licenses.popup.take().unwrap())
                .child(about_popup.popup.take().unwrap())
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
        LaunchConfig::new().with_window(
            WindowConfig::new(app)
                .with_title("Bridgex - Rust + Freya")
                .with_background(DARK_COLORS.background)
                .with_min_size(900.0, 700.0)
        )
    )
}
