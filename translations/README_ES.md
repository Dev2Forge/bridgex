# Bridge 🌉🐍

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![PyPI version](https://img.shields.io/pypi/v/bridge-md.svg)](https://pypi.org/project/bridge-md/)
[![Python Version](https://img.shields.io/badge/python-3.9%20|%203.10%20|%203.11%20|%203.12%20|%203.13-blue.svg)](https://www.python.org/downloads/)
[![Issues](https://img.shields.io/github/issues/Dev2Forge/bridge)](https://github.com/Dev2Forge/bridge/issues)

Bridge es una interfaz gráfica de código abierto para la conversión de archivos a formato Markdown, construida en Python y basada en [Pyside6 (Qt for Python)](https://doc.qt.io/qtforpython-6/). Su objetivo es facilitar el acceso a la biblioteca [Markitdown](https://github.com/microsoft/markitdown) mediante una experiencia visual sencilla y modular.

---

## Tabla de Contenidos

- [Bridge 🌉🐍](#bridge-)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Características ✨](#características-)
  - [Capturas de Pantalla 🖼️](#capturas-de-pantalla-️)
  - [Instalación 📦](#instalación-)
  - [Clonación y Ejecución Local 💻](#clonación-y-ejecución-local-)
  - [Uso Básico 🚀](#uso-básico-)
  - [Formatos Soportados 📂](#formatos-soportados-)
  - [Limitaciones ⚠️](#limitaciones-️)
  - [Releases 🏷️](#releases-️)
  - [Dependencias y licencias 📚](#dependencias-y-licencias-)
  - [Contribuir 🤝](#contribuir-)
  - [Licencia 📄](#licencia-)

---

## Características ✨

- Interfaz gráfica multiplataforma.
- Conversión de archivos a Markdown de forma eficiente.
- Modularidad: fácil de adaptar y extender.
- Soporte para múltiples formatos de entrada.
- Edición ligera previa al guardado.

---

## Capturas de Pantalla 🖼️

![img](https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/pymd/bridge/preview-1-main.png)
_Ejemplo de la ventana principal de Bridge._

<details>
<summary><strong>Ver previsualizaciones de interfaz</strong></summary>

<br>

|      Nombre    |     Vista Previa      |
|:----------------:|:---------------------:|
| Abrir Archivo | ![img](https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/pymd/bridge/preview-2-openfile.png) |
| Mini Editor | ![img](https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/pymd/bridge/preview-3-minieditor.png) |
| Convertir | ![img](https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/pymd/bridge/preview-4-convert.png) |
| Cambiar Idioma | ![img](https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/pymd/bridge/preview-5-languagechange.png) |

</details>





---

## Instalación 📦

Requisitos:
- Python >= **3.9** Y <= **3.13** 
Instalación vía pip:

```sh
pip install bridge
```

Se recomienda el uso de un entorno virtual. Para personalizar los formatos soportados, edite el archivo [`requirements.txt`](../requirements.txt) según sus necesidades.

---

## Clonación y Ejecución Local 💻

Clona el repositorio y ejecuta Bridge localmente:

```sh
git clone https://github.com/Dev2Forge/bridge.git
cd bridge
python -m venv .venv
.venv\Scripts\activate  # En Windows
# source .venv/bin/activate  # En Linux/MacOS
pip install -r requirements.txt
python -m src.bridge
```

---

## Uso Básico 🚀

1. Ejecute la aplicación desde la terminal o entorno gráfico.
2. Seleccione el archivo a convertir.
3. Revise y edite el resultado si es necesario.
4. Guarde el archivo en formato Markdown.

---

## Formatos Soportados 📂

Bridge admite la conversión de los siguientes formatos de archivo:

- PDF (`.pdf`)
- Word (`.docx`)
- PowerPoint (`.pptx`)
- Excel (`.xlsx`, `.xls`, `.csv`)
- Mensajes Outlook (`.msg`)
- Texto (`.txt`, `.text`)
- Markdown (`.md`, `.markdown`)
- JSON (`.json`, `.jsonl`)
- XML (`.xml`)
- RSS/Atom (`.rss`, `.atom`)
- HTML/MHTML (`.html`, `.htm`, `.mhtml`)
- ePub (`.epub`)
- Archivos comprimidos (`.zip`)
- Jupyter Notebooks (`.ipynb`)
- Otros formatos compatibles con Markitdown

---

## Limitaciones ⚠️

Bridge no es un IDE, editor de texto, editor de Markdown ni visor de documentos. Su propósito es servir como puente entre el usuario y la conversión a Markdown, ofreciendo una edición ligera y sin funcionalidades de edición avanzada.

---

## Releases 🏷️

Consulta las versiones publicadas y notas de lanzamiento en la sección [Releases](https://github.com/Dev2Forge/bridge/releases) del repositorio.

---

## Dependencias y licencias 📚

Este proyecto utiliza librerías de terceros, cada una con su propia licencia. Consulte la carpeta [third-party](../third-party/) para más información.

---

## Contribuir 🤝

Las contribuciones son bienvenidas. Por favor, abra un issue o pull request siguiendo las buenas prácticas de la comunidad open source.

---

## Licencia 📄

Distribuido bajo la [Licencia MIT](./LICENSE).

©2025 Dev2Forge