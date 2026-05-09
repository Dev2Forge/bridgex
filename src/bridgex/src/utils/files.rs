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
    pub fn new(path: PathBuf) -> Self {
        Self { path: path }
    }

    pub fn path(&self) -> &PathBuf {
        &self.path
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
    /// `Option<FileOwn>` if a file was selected.
    ///
    pub fn open_file_dialog(mut filters: Vec<Filter>) -> Option<Self> {
        if filters.is_empty() {
            filters.push(Filter::new("Documents", &DOCUMENT_EXTENSIONS));
        }

        let all_allowed_extensions: Vec<&'static str> = filters
            .iter()
            .flat_map(|filter| filter.extensions.iter().copied())
            .collect();

        let dialog = FileDialog::new().add_filter("All allowed files", &all_allowed_extensions);
        let dialog = Self::set_filters(filters, dialog);
        Self::construct_paths(dialog)
    }

    fn set_filters(filters: Vec<Filter>, dialog: FileDialog) -> FileDialog {
        filters
            .into_iter()
            .fold(dialog, |dialog, filter| { dialog.add_filter(filter.name, &filter.extensions) })
    }

    fn construct_paths(dialog: FileDialog) -> Option<Self> {
        let path = dialog.pick_file()?;
        Some(Self::new(path))
    }
}
