use freya::{ code_editor::EditorTheme, prelude::* };

pub const GITHUB_COLORS: ColorsSheet = ColorsSheet {
    primary: Color::from_rgb(56, 139, 255),
    secondary: Color::from_rgb(110, 118, 129),
    tertiary: Color::from_rgb(64, 120, 210),

    success: Color::from_rgb(52, 199, 89),
    warning: Color::from_rgb(255, 161, 0),
    error: Color::from_rgb(255, 69, 58),
    info: Color::from_rgb(56, 139, 255),

    background: Color::from_rgb(10, 12, 17),
    surface_primary: Color::from_rgb(15, 18, 24),
    surface_secondary: Color::from_rgb(20, 24, 34),
    surface_tertiary: Color::from_rgb(24, 28, 39),
    surface_inverse: Color::from_rgb(255, 255, 255),
    surface_inverse_secondary: Color::from_rgb(230, 230, 230),
    surface_inverse_tertiary: Color::from_rgb(200, 200, 200),

    border: Color::from_rgb(55, 61, 72),
    border_focus: Color::from_rgb(56, 139, 255),
    border_disabled: Color::from_rgb(74, 79, 89),

    text_primary: Color::from_rgb(196, 206, 219),
    text_secondary: Color::from_rgb(139, 147, 157),
    text_placeholder: Color::from_rgb(83, 92, 104),
    text_inverse: Color::WHITE,
    text_highlight: Color::from_rgb(56, 139, 255),

    hover: Color::from_rgb(38, 44, 55),
    focus: Color::from_rgb(56, 139, 255),
    active: Color::from_rgb(45, 52, 64),
    disabled: Color::from_rgb(64, 71, 82),

    overlay: Color::from_af32rgb(0.6, 0, 0, 0),
    shadow: Color::from_af32rgb(0.4, 0, 0, 0),
};

pub fn github_app_theme() -> Theme {
    let mut theme = Theme::default();
    theme.name = "GitHub Dark";
    theme.colors = GITHUB_COLORS;
    theme
}

pub fn github_editor_theme() -> EditorTheme {
    EditorTheme {
        background: Color::from_rgb(15, 18, 24),
        text: Color::from_rgb(196, 206, 219),
        cursor: Color::from_rgb(56, 139, 255),
        highlight: Color::from_rgb(79, 104, 175),
        gutter_selected: Color::from_rgb(82, 89, 102),
        gutter_unselected: Color::from_rgb(45, 51, 60),
        line_selected_background: Color::from_rgb(22, 26, 36),
        whitespace: Color::from_af32rgb(0.2, 223, 191, 142),
    }
}
