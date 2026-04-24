/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosriveorg@gmail.com)
 *
 * File: \src\ts\Utils.ts
 * Created: Wednesday, 22nd April 2026 2:15:55 pm
 * -----
 * Last Modified: Friday, 24th April 2026 2:34:55 pm
 * Modified By: tutosrive (tutosriveorg@gmail.com)
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
