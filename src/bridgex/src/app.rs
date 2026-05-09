use freya::{
    code_editor::{ CodeEditor, CodeEditorData, EditorTheme, LanguageId },
    prelude::*,
    text_edit::Rope,
};
use crate::theme::{ github_app_theme, github_editor_theme, GITHUB_COLORS };
use crate::ui::{ about::AboutPopup, licenses::LicencesPopup, menu::MenuBarOwn };
use crate::utils::files::FileOwn;

pub fn app() -> impl IntoElement {
    use_init_theme(github_app_theme);
    let theme_colors = GITHUB_COLORS;

    let mut open_file_state = use_state(|| Option::<FileOwn>::None);
    let focus = use_focus();

    let mut popup_licenses = LicencesPopup::new();
    let mut about_popup = AboutPopup::new(popup_licenses.show_popup.clone());
    let show_licenses = popup_licenses.show_popup.clone();
    let show_about = about_popup.show_popup.clone();

    let mut editor = use_state(|| {
        let mut editor = CodeEditorData::new("".into(), LanguageId::Markdown);
        editor.parse();
        editor.measure(14.0, "Jetbrains Mono");
        editor
    });

    let editor_theme = github_editor_theme();

    let menu_ctn = MenuBarOwn::new(
        open_file_state.clone(),
        show_about.clone(),
        show_licenses.clone(),
        Some("#161b22".to_string())
    );
    let menu = menu_ctn.menu_bar();

    let opened_file = open_file_state.read().clone();
    if let Some(file) = opened_file {
        let file_path = file.path().to_str().unwrap_or_default();
        let converted = crate::logic::converter::convert_from_path(file_path);
        editor.write().rope = Rope::from_str(converted.as_str());
        editor.write().parse();
        *open_file_state.write() = None;
    }

    rect()
        .background(theme_colors.background)
        .child(menu)
        .child(build_popups(&mut popup_licenses, &mut about_popup))
        .child(
            rect()
                .horizontal()
                .width(Size::fill())
                .child(build_editor(editor.into(), focus, editor_theme))
                .child(build_preview(editor.read().rope.to_string(), theme_colors))
        )
        .padding(Gaps::new_all(10.0))
        .expanded()
}

fn build_editor(
    editor: Writable<CodeEditorData>,
    focus: Focus,
    theme: EditorTheme
) -> impl IntoElement {
    rect()
        .background(GITHUB_COLORS.surface_secondary)
        .border(Border::new().width(1.0).fill(GITHUB_COLORS.border))
        .corner_radius(12.0)
        .padding(Gaps::new_all(12.0))
        .width(Size::percent(50.0))
        .child(
            CodeEditor::new(editor, focus.a11y_id())
                .a11y_auto_focus(true)
                .font_family("Consolas")
                .gutter(false)
                .theme(theme)
        )
}

fn build_preview(markdown: String, theme_colors: ColorsSheet) -> impl IntoElement {
    rect()
        .background(theme_colors.surface_primary)
        .border(Border::new().width(1.0).fill(theme_colors.border))
        .corner_radius(12.0)
        .padding(Gaps::new_all(14.0))
        .width(Size::percent(50.0))
        .child(
            ScrollView::new().child(
                MarkdownViewer::new(markdown)
                    .padding(Gaps::new_all(8.0))
                    .color(theme_colors.text_primary)
            )
        )
}

fn build_popups(
    popup_licenses: &mut LicencesPopup,
    about_popup: &mut AboutPopup
) -> impl IntoElement {
    rect()
        .child(popup_licenses.popup.take().unwrap())
        .child(about_popup.popup.take().unwrap())
        .max_height(Size::px(400.0))
}
