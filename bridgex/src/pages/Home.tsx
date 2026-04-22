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
 * Last Modified: Tuesday, 21st April 2026 11:36:29 pm
 * Modified By: tutosrive (tutosrive@Dev2Forge.software)
 * -----
 */

import { invoke } from '@tauri-apps/api/core';
import { open, message } from '@tauri-apps/plugin-dialog';
import { useState } from 'react';

interface HomeProps {
  data?: any;
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
      filters: [
        {
          name: 'Documents',
          extensions: ['docx', 'pdf', 'html', 'txt'],
        },
      ],
    });

    // if (__filename?.replace(' ', '') != __filename || __filename.includes('ñ')) {
    //   await message('The file name is not correct (Contains white spaces or non ascii characters)');
    // } else {
    //   await message(__filename);
    // }

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
