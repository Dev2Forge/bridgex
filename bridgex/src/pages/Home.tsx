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
 * Last Modified: Monday, 20th April 2026 10:26:20 pm
 * Modified By: tutosrive (tutosrive@Dev2Forge.software)
 * -----
 */

import { ChangeEvent, useState } from 'react';
import LoadFile from '../components/LoadFile';
import { invoke } from '@tauri-apps/api/core';

interface HomeProps {
  data?: any;
}

const Home: React.FC<HomeProps> = ({ data }) => {
  const [file, setFile] = useState<File>();
  const [markdown, setMarkdown] = useState<string>('');

  const handleChangeFile = async (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      await convert();
    }
  };

  const convert = async () => {
    const filename = 'D:/UNIVERSIDAD/SEMESTRE_5/materias/Género/reflexion-sobre-las-sufrajistas.pdf';
    const res: string = await invoke('convert_file', { filename });
    setMarkdown(res);
  };

  return (
    <div>
      <LoadFile handleChange={handleChangeFile} />
      <p>{file && `Filename: ${file.name}`}</p>
      <pre>{markdown && `Content:\n${markdown}`}</pre>
    </div>
  );
};

export default Home;
