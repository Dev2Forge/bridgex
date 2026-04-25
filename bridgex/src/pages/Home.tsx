/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosriveorg@gmail.com)
 *
 * File: \src\pages\Home.tsx
 * Created: Monday, 20th April 2026 9:55:14 am
 * -----
 * Last Modified: Friday, 24th April 2026 11:00:50 pm
 * Modified By: tutosrive (tutosriveorg@gmail.com)
 * -----
 */

import { invoke } from '@tauri-apps/api/core';
import { open } from '@tauri-apps/plugin-dialog';
import { useState } from 'react';
import * as utils from '../ts/Utils';

const Home = () => {
  const [filename, setFileName] = useState<string>('');
  const [markdown, setMarkdown] = useState<string>('');

  const loadFile = async () => {
    const __filename = await open({
      multiple: false,
      directory: false,
      canCreateDirectories: false,
      pickerMode: 'document',
      title: 'Select a file to convert',
      filters: utils.applyFilters(),
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
      <p>{filename && `Filename: ${filename}`}</p>
      <pre>{markdown && `Content:\n${markdown}`}</pre>
    </div>
  );
};

export default Home;
