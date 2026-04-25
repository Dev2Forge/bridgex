/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosriveorg@gmail.com)
 *
 * File: \src\components\MenuBarDialogs\HelpOptions.tsx
 * Created: Friday, 24th April 2026 4:01:18 pm
 * -----
 * Last Modified: Friday, 24th April 2026 10:46:08 pm
 * Modified By: tutosrive (tutosriveorg@gmail.com)
 * -----
 */

import { FC } from 'react';

interface HelpOptionsProps {
  onAbout: () => void;
  onLicences: () => void;
}

const HelpOptions: FC<HelpOptionsProps> = ({ onAbout, onLicences }) => {
  return (
    <div className="left-24 menubar-dropdown bg-taupe-950 p-2 ms-1 text-taupe-50 rounded-b-sm" popover="auto" id="menubar-help">
      <div className="menubar-dropdown-item flex items-center w-50 px-2">
        <button className="me-2" onClick={onAbout}>
          About
        </button>
        <span className="text-xs opacity-30 text-right">
          <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd>
        </span>
      </div>
      <div className="menubar-dropdown-item flex items-center w-50 px-2">
        <button className="me-2" onClick={onLicences}>
          Licences
        </button>
        <span className="text-xs opacity-30 text-right">
          <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd>
        </span>
      </div>
    </div>
  );
};

export default HelpOptions;
