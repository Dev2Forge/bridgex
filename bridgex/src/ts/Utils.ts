/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosrive@Dev2Forge.software)
 *
 * File: \src\ts\Utils.ts
 * Created: Wednesday, 22nd April 2026 2:15:55 pm
 * -----
 * Last Modified: Wednesday, 22nd April 2026 2:17:31 pm
 * Modified By: tutosrive (tutosrive@Dev2Forge.software)
 * -----
 */

import { DialogFilter } from '@tauri-apps/plugin-dialog';
import { FILE_TYPES_ALLOWED_JSON } from './Constants';

export function applyFilters(): DialogFilter[] {
  const filters: Array<DialogFilter> = [];

  for (let docs_key in FILE_TYPES_ALLOWED_JSON) {
    const key = docs_key as keyof typeof FILE_TYPES_ALLOWED_JSON;
    const filter = {
      name: FILE_TYPES_ALLOWED_JSON[key]['name'],
      extensions: FILE_TYPES_ALLOWED_JSON[key]['ext'],
    };
    filters.push(filter);
  }

  return filters;
}
