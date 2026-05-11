# Bridgex 🌉<img width="64" src="https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/logos/bridgex-v0.1.0.webp">

[![Read in Spanish](https://img.shields.io/badge/read%20in-ES-red?logo=github)](https://github.com/Dev2Forge/bridgex/blob/main/translations/README_ES.md) [![GPLv3 License](https://img.shields.io/badge/license-GPLv3-blue.svg)](./LICENSE) [![Issues](https://img.shields.io/github/issues/Dev2Forge/bridgex)](https://github.com/Dev2Forge/bridgex/issues)

[![PyPI downloads](https://img.shields.io/pepy/dt/bridgex?label=pypi)](https://pepy.tech/project/bridgex) [![SourceForge downloads](https://img.shields.io/sourceforge/dt/bridgex?label=sourceforge-downloads)](https://sourceforge.net/projects/bridgex/)

[![crates.io downloads](https://img.shields.io/crates/d/bridgex?label=crates.io)](https://crates.io/crates/bridgex)

Bridgex is an open‑source desktop application for converting files to Markdown, built in Rust with [Freya](https://freyaui.dev/) and the [Markitdown](https://github.com/microsoft/markitdown) crate. It provides a lightweight graphical interface for editing converted Markdown content and saving it locally.

This repository maintains Rust packaging for `crates.io`, and also keeps Python packaging metadata so a compatible distribution can be published to `pypi.org` for interoperability.

---

## Features ✨

* Native Rust desktop app with [Freya UI](https://freyaui.dev/).
* Cross‑platform support for Windows, macOS, and Linux.
* Efficient file‑to‑Markdown conversion.
* Lightweight editing before saving.
* Modular architecture for future extensions.

---

## Screenshots 🖼️

![img](https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/bridgex/1-main-screen.png)
*Example of Bridgex’s main window.*

<details>
<summary><strong>View interface previews</strong></summary>

<br>

|     Name     | Preview |
|:----------------:|:---------------------:|
| Main Screen | ![img](https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/bridgex/1-main-screen.png) |
| LLM Config | ![img](https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/bridgex/2-llm-config.png) |
| Markdown Render | ![img](https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/bridgex/3-markdown-render.png) |

</details>

---

## Installation 📦

### Rust / crates.io installation

Requirements:

* Rust toolchain with `cargo`
* Recommended stable Rust version

Build and install locally from the current source tree:

```sh
cargo install --path .
```

Install the published crate from crates.io:

```sh
cargo install bridgex
```

Run directly from source:

```sh
cargo run --release
```

For a release build:

```sh
cargo build --release
./target/release/bridgex
```

### Python / PyPI installation

Install the compatible PyPI distribution with:

```sh
pip install bridgex
```

Run the installed package with:

```sh
bridgex
```

(If needed, you can also run it with `python -m bridgex`.)

Although Bridgex is implemented in Rust, the repository also includes Python packaging metadata to preserve compatibility with `pypi.org` as a secondary distribution target.

---

## Local Cloning and Execution 💻

Clone the repository and run Bridgex locally:

1. Clone the repository.

```sh
git clone https://github.com/Dev2Forge/bridgex.git
```

2. Navigate to the project directory.

```sh
cd bridgex/src/bridgex
```

3. Build and run the application.

```sh
cargo run --release
```

4. To install the binary locally:

```sh
cargo install --path .
```

---

## Basic Usage 🚀

1. Run the application from the terminal or the installed binary.
2. Select the file to convert.
3. Review and edit the Markdown result.
4. Save the file in Markdown format.

---

## Supported Formats 📂

Bridgex currently supports opening and converting the following file formats:

* Excel (`.xlsx`, `.xls`)
* Word (`.docx`)
* PowerPoint (`.pptx`)
* PDF (`.pdf`)
* HTML (`.html`, `.htm`)
* Images (`.jpg`, `.jpeg`)
* CSV (`.csv`)
* RSS / XML (`.xml`, `.rss`, `.atom`)
* ZIP archives (`.zip`)

---

## Limitations ⚠️

Bridgex is not an IDE, text editor, Markdown editor, or full document viewer. It is designed to bridge users to Markdown conversion with lightweight editing and a simple interface.

---

## Releases 🏷️

Check the published versions and release notes in the [Releases](https://github.com/Dev2Forge/bridgex/releases) section of the repository.

---

## Dependencies and Licences 📚

This project uses third‑party libraries with their own licenses. See the [third-party](https://github.com/Dev2Forge/bridgex/tree/main/third-party/) folder for details.

---

## Contribute 🤝

Contributions are welcome. Please open an issue or pull request following community best practices.

---

## Licence 📄

Distributed under the [GPLv3 Licence](https://github.com/Dev2Forge/bridgex/blob/main/LICENSE).

©2025–2026 Dev2Forge
