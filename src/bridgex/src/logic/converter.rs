use markitdown::MarkItDown;

pub fn convert_from_path(filename: &str) -> String {
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
