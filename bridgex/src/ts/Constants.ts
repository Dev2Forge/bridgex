/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosrive@Dev2Forge.software)
 *
 * File: \src\ts\constants.ts
 * Created: Wednesday, 22nd April 2026 12:56:26 pm
 * -----
 * Last Modified: Wednesday, 22nd April 2026 1:37:55 pm
 * Modified By: tutosrive (tutosrive@Dev2Forge.software)
 * -----
 */

export const FILE_TYPE_ALLOWED = ['doc', 'docx', 'pdf', 'txt', 'html', 'mhtml', 'xml', 'rss', 'atom', 'xls', 'xlsx', 'csv', 'pptx', 'zip', 'rar'];

export const DOCUMENT_FILES = [...FILE_TYPE_ALLOWED.slice(0, 9)];
export const DOCUMENT_SHEET = [...FILE_TYPE_ALLOWED.slice(9, 12)];
export const DOCUMENT_PRESENTATIONS = [FILE_TYPE_ALLOWED[12]];
export const DOCUMENT_COMPRESSED = [...FILE_TYPE_ALLOWED.slice(13, 15)];

export const FILE_TYPES_ALLOWED_JSON = {
  document_files: { name: 'Documents', ext: DOCUMENT_FILES },
  document_sheet: { name: 'Sheets', ext: DOCUMENT_SHEET },
  document_presentation: { name: 'Presentations', ext: DOCUMENT_PRESENTATIONS },
  document_compressed: { name: 'Compressed', ext: DOCUMENT_COMPRESSED },
  all_documents: { name: 'All', ext: FILE_TYPE_ALLOWED },
};
