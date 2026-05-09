use webbrowser;

pub fn open_url(url: &str) {
    let _ = webbrowser::open(url);
}
