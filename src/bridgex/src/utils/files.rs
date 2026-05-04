use std::{ path::PathBuf };
use rfd::FileDialog;
use crate::utils::constants::DOCUMENT_EXTENSIONS;

#[derive(Clone)]
pub struct Filter {
    name: &'static str,
    extensions: &'static [&'static str],
}

#[derive(Clone)]
pub struct FileOwn {
    path: PathBuf,
    base_name: String,
    extension: String,
}

impl Filter {
    pub fn new(name: &'static str, extensions: &'static [&'static str]) -> Self {
        Self {
            name: name,
            extensions: extensions,
        }
    }
}

impl FileOwn {
    pub fn new(path: PathBuf, name: String, ext: String) -> Self {
        Self { path: path, base_name: name, extension: ext }
    }

    /// Open a Dialog to get a file
    ///
    /// ## Example
    /// ```
    /// let filters = vec!(Filter::new("Images", ["png", "jpg", "webp"]));
    /// FileOwn::open_file_dialog(filters)
    /// ```
    ///
    /// ## Arguments
    ///
    /// `filters: &[Filter]`: An array of extensions with it label
    ///
    /// ## Returns
    ///
    /// `FileOwn`: An struct with the `path`, `basename` and it `extension`
    ///
    ///
    pub fn open_file_dialog(filters: Vec<Filter>) -> Self {
        let dialog = FileDialog::new();
        Self::set_filters(filters, dialog.clone());
        Self::construct_paths(dialog)
    }

    fn set_filters(mut filters: Vec<Filter>, dialog: FileDialog) {
        if filters.len() == 0 {
            filters.push(Filter::new("Documents", &DOCUMENT_EXTENSIONS));
        }

        for filter in filters {
            dialog.clone().add_filter(filter.name, &filter.extensions);
        }
    }

    fn construct_paths(dialog: FileDialog) -> Self {
        let path = dialog.clone().pick_file().unwrap();
        let name = String::from(path.file_name().unwrap().to_str().unwrap());
        let ext = String::from(path.extension().unwrap().to_str().unwrap());

        Self::new(path, name, ext)
    }

    pub fn exists(filename: String) -> bool {
        PathBuf::from(filename).exists()
    }
}
