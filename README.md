# Bridgex 🌉<img width="64" src="https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/logos/bridgex-v0.1.0.webp">

[![Read in Spanish](https://img.shields.io/badge/read%20in-ES-red?logo=github)](https://github.com/Dev2Forge/bridgex/blob/main/translations/README_ES.md) [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE) ![Pepy Total Downloads](https://img.shields.io/pepy/dt/bridgex?label=pypi-downloads) ![SourceForge Downloads](https://img.shields.io/sourceforge/dt/bridgex?label=sourceforfe-downloads) [![PyPI version](https://img.shields.io/pypi/v/bridgex?label=bridgex)](https://pypi.org/project/bridgex/) ![PyPI - Python Version](https://img.shields.io/pypi/pyversions/bridgex) [![Issues](https://img.shields.io/github/issues/Dev2Forge/bridgex)](https://github.com/Dev2Forge/bridgex/issues)

Bridgex is an open‑source graphical interface for converting files to Markdown, built in [Tauri](https://github.com/tauri-apps/tauri) + [React](https://github.com/facebook/react). Its objective is to simplify access to the [Markitdown](https://github.com/microsoft/markitdown) library through a straightforward, modular visual experience.

---

## Features ✨

- Cross‑platform graphical interface.
- Efficient file‑to‑Markdown conversion.
- Modularity: easy to adapt and extend.
- Support for multiple input formats.
- Lightweight editing prior to saving.

---

## Screenshots 🖼️

![img](https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/pymd/bridgex/preview-1-main.png)
_Example of Bridgex’s main window._

<details>
<summary><strong>View interface previews</strong></summary>

<br>

|      Name       |                                                            Preview                                                             |
| :-------------: | :----------------------------------------------------------------------------------------------------------------------------: |
|    Open File    |    ![img](https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/pymd/bridgex/preview-2-openfile.png)    |
|   Mini Editor   |   ![img](https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/pymd/bridgex/preview-3-minieditor.png)   |
|     Convert     |    ![img](https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/pymd/bridgex/preview-4-convert.png)     |
| Change Language | ![img](https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/pymd/bridgex/preview-5-languagechange.png) |

</details>

---

## Installation 📦

Install via pip:

```sh
pip install bridgex
```

Start Bridgex from the terminal:

```sh
bridgex
```

It is recommended to use a virtual environment. To customise supported formats, edit the [`requirements.txt`](https://github.com/Dev2Forge/bridgex/blob/main/requirements.txt) file as needed.

---

## Local Cloning and Execution 💻

Clone the repository and run Bridgex locally:

1. Clone the repository.

```sh
git clone https://github.com/Dev2Forge/bridgex.git
```

2. Navigate to the project directory and set up a virtual environment.

```sh
cd bridgex
```

3. Install the required dependencies.

```sh
pnpm i
```

6. Run the application (DevMode).

```sh
pnpm tauri dev
```

---

## Basic Usage 🚀

1. Run the application from the terminal or GUI.
2. Select the file to convert.
3. Review and edit the result if necessary.
4. Save the file in Markdown format.

---

## Supported Formats 📂

Bridgex supports conversion of the following file formats:

- PDF (`.pdf`)
- Word (`.docx`)
- PowerPoint (`.pptx`)
- Excel (`.xlsx`, `.xls`, `.csv`)
- Outlook Messages (`.msg`)
- Text (`.txt`, `.text`)
- Markdown (`.md`, `.markdown`)
- JSON (`.json`, `.jsonl`)
- XML (`.xml`)
- RSS/Atom (`.rss`, `.atom`)
- HTML/MHTML (`.html`, `.htm`, `.mhtml`)
- ePub (`.epub`)
- Compressed files (`.zip`)
- Jupyter Notebooks (`.ipynb`)
- Other formats supported by Markitdown

---

## Limitations ⚠️

Bridgex is not an IDE, text editor, Markdown editor, or document viewer. Its purpose is to serve as a bridgex between the user and Markdown conversion, offering lightweight editing without advanced editing features.

---

## Releases 🏷️

Check the published versions and release notes in the [Releases](https://github.com/Dev2Forge/bridgex/releases) section of the repository.

---

## Dependencies and Licences 📚

This project uses third‑party libraries, each with its own licence. See the [third‑party](https://github.com/Dev2Forge/bridgex/tree/main/third-party/) folder for more information.

---

## Contribute 🤝

Contributions are welcome. Please open an issue or pull request following the community’s best practices.

---

## Licence 📄

Distributed under the [MIT Licence](https://github.com/Dev2Forge/bridgex/blob/main/LICENSE).

©2026 Dev2Forge
