# Bridgex 🌉<img width="64" src="https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/logos/bridgex-v0.1.0.webp">

[![Read inglés](https://img.shields.io/badge/read%20in-EN-red?logo=github)](https://github.com/Dev2Forge/bridgex/blob/main/README.md) [![GPLv3 License](https://img.shields.io/badge/license-GPLv3-blue.svg)](./LICENSE) [![Issues](https://img.shields.io/github/issues/Dev2Forge/bridgex)](https://github.com/Dev2Forge/bridgex/issues)

[![PyPI downloads](https://img.shields.io/pepy/dt/bridgex?label=pypi)](https://pepy.tech/project/bridgex) [![SourceForge downloads](https://img.shields.io/sourceforge/dt/bridgex?label=sourceforge-downloads)](https://sourceforge.net/projects/bridgex/)

[![crates.io downloads](https://img.shields.io/crates/d/bridgex?label=crates.io)](https://crates.io/crates/bridgex)

Bridgex es una aplicación de escritorio de código abierto para convertir archivos a Markdown, construida en Rust con [Freya](https://freyaui.dev/) y el crate [Markitdown](https://github.com/microsoft/markitdown). Ofrece una interfaz gráfica ligera para editar el Markdown convertido y guardarlo localmente.

---

## Tabla de Contenidos

- [Bridgex 🌉](#bridgex-)
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

![img](https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/bridgex/1-main-screen.png)
_Ejemplo de la ventana principal de Bridgex._

<details>
<summary><strong>Ver previsualizaciones de interfaz</strong></summary>

<br>

|      Nombre    |     Vista Previa      |
|:----------------:|:---------------------:|
| Pantalla Principal | ![img](https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/bridgex/1-main-screen.png) |
| Configuración LLM | ![img](https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/bridgex/2-llm-config.png) |
| Render Markdown | ![img](https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/bridgex/3-markdown-render.png) |

</details>





---

## Instalación 📦

Requisitos:

- Toolchain de Rust con `cargo`
- Versión estable recomendada de Rust

### Rust / instalación desde crates.io

Requisitos:

- Toolchain de Rust con `cargo`
- Versión estable recomendada de Rust

Construir e instalar localmente:

```sh
cargo install --path .
```

Instalar el crate publicado desde crates.io:

```sh
cargo install bridgex
```

Ejecutar directamente desde el código fuente:

```sh
cargo run --release
```

Para un build de lanzamiento:

```sh
cargo build --release
./target/release/bridgex
```

### Python / instalación desde PyPI

Instala la distribución compatible de PyPI con:

```sh
pip install bridgex
```

Ejecuta el paquete instalado con:

```sh
bridgex
```

(Si es necesario, también puedes ejecutarlo con `python -m bridgex`.)

Aunque Bridgex se implementa en Rust, el repositorio mantiene metadatos de empaquetado Python para preservar compatibilidad con `pypi.org` como destino de distribución secundaria.

---

## Clonación y Ejecución Local 💻

Clona el repositorio y ejecuta Bridgex localmente:

1. Clona el repositorio.

```sh
git clone https://github.com/Dev2Forge/bridgex.git
```

2. Navega al directorio del proyecto.

```sh
cd bridgex/src/bridgex
```

3. Construye y ejecuta la aplicación.

```sh
cargo run --release
```

4. Para instalar el binario localmente:

```sh
cargo install --path .
```

---

## Uso Básico 🚀

1. Ejecute la aplicación desde la terminal o entorno gráfico.
2. Seleccione el archivo a convertir.
3. Revise y edite el resultado si es necesario.
4. Guarde el archivo en formato Markdown.

---

## Formatos Soportados 📂

Bridgex admite actualmente la apertura y conversión de los siguientes formatos:

- Excel (`.xlsx`, `.xls`)
- Word (`.docx`)
- PowerPoint (`.pptx`)
- PDF (`.pdf`)
- HTML (`.html`, `.htm`)
- Imágenes (`.jpg`, `.jpeg`)
- CSV (`.csv`)
- RSS / XML (`.xml`, `.rss`, `.atom`)
- Archivos ZIP (`.zip`)

---

## Limitaciones ⚠️

Bridgex no es un IDE, editor de texto, editor de Markdown ni visor de documentos. Su propósito es servir como puente entre el usuario y la conversión a Markdown, ofreciendo una edición ligera y sin funcionalidades de edición avanzada.

---

## Releases 🏷️

Consulta las versiones publicadas y notas de lanzamiento en la sección [Releases](https://github.com/Dev2Forge/bridgex/releases) del repositorio.

---

## Dependencias y licencias 📚

Este proyecto utiliza librerías de terceros, cada una con su propia licencia. Consulte la carpeta [third-party](https://github.com/Dev2Forge/bridgex/tree/main/third-party/) para más información.

---

## Contribuir 🤝

Las contribuciones son bienvenidas. Por favor, abra un issue o pull request siguiendo las buenas prácticas de la comunidad open source.

---

## Licencia 📄

Distribuido bajo la [Licencia GPLv3](https://github.com/Dev2Forge/bridgex/blob/main/LICENSE).

©2025 Dev2Forge
