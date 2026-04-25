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
 * Last Modified: Friday, 24th April 2026 10:42:32 pm
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
    <div className="left-0 menubar-dropdown bg-taupe-950 p-2 ms-1 text-taupe-50 rounded-b-sm" popover="auto" id="menubar-file">
      <div className="menubar-dropdown-item flex items-center w-50 px-2">
        <button className="me-2" onClick={onOpenFile}>
          Open File
        </button>
        <span className="text-xs opacity-30 text-right">
          <kbd>Ctrl</kbd>+<kbd>O</kbd>
        </span>
      </div>
      <div className="menubar-dropdown-item flex items-center w-50 px-2">
        <button className="me-2" onClick={onSaveFile}>
          Save File
        </button>
        <span className="text-xs opacity-30 text-right">
          <kbd>Ctrl</kbd>+<kbd>S</kbd>
        </span>
      </div>
    </div>
  );
};

export default FileOptions;
