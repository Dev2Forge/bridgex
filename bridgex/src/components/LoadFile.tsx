/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosriveorg@gmail.com)
 *
 * File: \src\components\LoadFile.tsx
 * Created: Monday, 20th April 2026 9:59:59 am
 * -----
 * Last Modified: Friday, 24th April 2026 11:01:22 pm
 * Modified By: tutosrive (tutosriveorg@gmail.com)
 * -----
 */

import { ChangeEvent } from 'react';

interface LoadFileProps {
  handleChange: (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
}

const LoadFile: React.FC<LoadFileProps> = ({ handleChange }) => {
  return (
    <div>
      <label htmlFor="loadFile">Load File:</label>
      <input type="file" name="loadFile" id="load-file" onChange={(e) => handleChange(e)} />
    </div>
  );
};

export default LoadFile;
