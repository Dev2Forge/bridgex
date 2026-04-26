/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosriveorg@gmail.com)
 *
 * File: \src\components\FileOptions.tsx
 * Created: Friday, 24th April 2026 3:20:11 pm
 * -----
 * Last Modified: Saturday, 25th April 2026 7:25:23 pm
 * Modified By: tutosrive (tutosriveorg@gmail.com)
 * -----
 */

import { FC } from 'react';

interface FileOptionsProps {
  onOpenFile: () => void;
  onSaveFile: () => void;
}

const FileOptions: FC<FileOptionsProps> = ({ onOpenFile, onSaveFile }) => {
  return (
    <div className="menubar-dropdown fileoptions" popover="auto" id="menubar-file">
      <div className="menubar-dropdown-item">
        <button onClick={onOpenFile}>Open File</button>
        <span>
          <kbd>Ctrl</kbd>+<kbd>O</kbd>
        </span>
      </div>
      <div className="menubar-dropdown-item">
        <button onClick={onSaveFile}>Save File</button>
        <span>
          <kbd>Ctrl</kbd>+<kbd>S</kbd>
        </span>
      </div>
    </div>
  );
};

export default FileOptions;
