/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosrive@Dev2Forge.software)
 *
 * File: \src\pages\Home.tsx
 * Created: Monday, 20th April 2026 9:55:14 am
 * -----
 * Last Modified: Wednesday, 22nd April 2026 1:46:46 pm
 * Modified By: tutosrive (tutosrive@Dev2Forge.software)
 * -----
 */

import { invoke } from '@tauri-apps/api/core';
import { DialogFilter, open } from '@tauri-apps/plugin-dialog';
import { useState } from 'react';
import { FILE_TYPES_ALLOWED_JSON } from '../ts/constants';

interface HomeProps {
  data?: any;
}

function applyFilters(): DialogFilter[] {
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

const Home: React.FC<HomeProps> = () => {
  const [filename, setFileName] = useState<string>('');
  const [markdown, setMarkdown] = useState<string>('');
  const [msg, setMsg] = useState<string>();

  const loadFile = async () => {
    const __filename = await open({
      multiple: false,
      directory: false,
      canCreateDirectories: false,
      pickerMode: 'document',
      title: 'Select a file to convert',
      filters: applyFilters(),
    });

    if (__filename != null) {
      setFileName(__filename);
      await convert();
    } else {
      setFileName('Sure that select a file!');
    }
  };

  const convert = async () => {
    let res: string = await invoke('convert_from_path', { filename });
    setMarkdown(res);
  };

  return (
    <div>
      <button onClick={loadFile}>LoadFile</button>
      {/* <LoadFile handleChange={handleChangeFile} /> */}
      <p>{filename && `Filename: ${filename}`}</p>
      <pre>{markdown && `Content:\n${markdown}`}</pre>
    </div>
  );
};

export default Home;
