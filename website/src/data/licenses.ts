/**
 * Third-party licenses configuration for Bridgex
 * This file contains all license information for dependencies used in the project
 */

export interface License {
  key: string;
  name: string;
  version: string;
  license: string;
  copyright?: string;
  url: string;
  description: string;
}

export const licenses: License[] = [
  {
    key: 'bridgex',
    name: 'Bridgex',
    version: '0.2.1',
    license: 'GPL-3.0-only',
    copyright: '© 2025-2026 Dev2Forge',
    url: 'https://github.com/Dev2Forge/bridgex',
    description: 'Open-source desktop app for converting files to Markdown'
  },
  {
    key: 'freya',
    name: 'Freya',
    version: '0.4.0-rc.19',
    license: 'MIT License',
    url: 'https://crates.io/crates/freya',
    description: 'Rust GUI framework powered by Skia'
  },
  {
    key: 'markitdown',
    name: 'markitdown-rs',
    version: '0.1.11',
    license: 'MIT License',
    url: 'https://crates.io/crates/markitdown',
    description: 'Rust implementation of Microsoft Markitdown'
  },
  {
    key: 'rfd',
    name: 'rfd',
    version: '0.17.2',
    license: 'MIT License',
    url: 'https://crates.io/crates/rfd',
    description: 'Native file dialog library for Rust'
  },
  {
    key: 'tokio',
    name: 'Tokio',
    version: '1.x',
    license: 'MIT License',
    url: 'https://crates.io/crates/tokio',
    description: 'Async runtime for Rust'
  },
  {
    key: 'serde',
    name: 'Serde',
    version: '1.x',
    license: 'MIT OR Apache-2.0',
    url: 'https://crates.io/crates/serde',
    description: 'Serialization framework for Rust'
  },
  {
    key: 'serde_json',
    name: 'serde_json',
    version: '1.x',
    license: 'MIT OR Apache-2.0',
    url: 'https://crates.io/crates/serde_json',
    description: 'JSON serialization for Rust'
  },
  {
    key: 'webbrowser',
    name: 'webbrowser',
    version: '1.2.1',
    license: 'MIT OR Apache-2.0',
    url: 'https://crates.io/crates/webbrowser',
    description: 'Open URLs in system web browsers'
  }
];
