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
    version: '0.1.0',
    license: 'MIT License',
    copyright: '© 2025 Dev2Forge',
    url: 'https://github.com/Dev2Forge/bridgex',
    description: 'Graphical interface for converting files to Markdown'
  },
  {
    key: 'markitdown',
    name: 'Markitdown',
    version: '0.1.1',
    license: 'MIT License',
    copyright: '© Microsoft Corporation',
    url: 'https://github.com/microsoft/markitdown',
    description: 'Document to Markdown conversion library by Microsoft'
  },
  {
    key: 'pyside6',
    name: 'PySide6-Essentials',
    version: '6.9.0',
    license: 'LGPL-3.0-only',
    copyright: '© The Qt Company',
    url: 'https://doc.qt.io/qtforpython-6/',
    description: 'Qt for Python - GUI framework'
  },
  {
    key: 'chromologger',
    name: 'ChromoLogger',
    version: '0.1.8',
    license: 'MIT License',
    url: 'https://pypi.org/project/chromologger/',
    description: 'Colorful logging for Python'
  },
  {
    key: 'sqlazo',
    name: 'Sqlazo',
    version: '0.1.5',
    license: 'MIT License',
    url: 'https://pypi.org/project/sqlazo/',
    description: 'SQLite database utilities'
  },
  {
    key: 'chromolog',
    name: 'ChromoLog',
    version: '0.2.4',
    license: 'MIT License',
    url: 'https://pypi.org/project/chromolog/',
    description: 'Chrome-style logging'
  }
];
