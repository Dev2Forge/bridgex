/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosriveorg@gmail.com)
 *
 * File: \src\components\MenuBarDialogs\SettingsOptions.tsx
 * Created: Friday, 24th April 2026 4:00:41 pm
 * -----
 * Last Modified: Friday, 24th April 2026 10:46:44 pm
 * Modified By: tutosrive (tutosriveorg@gmail.com)
 * -----
 */

import { FC } from 'react';

interface SettingsOptionsProps {
  onTheme: () => void;
  onLanguage: () => void;
}

const SettingsOptions: FC<SettingsOptionsProps> = ({ onTheme, onLanguage }) => {
  return (
    <div className="left-7 menubar-dropdown bg-taupe-950 p-2 ms-1 text-taupe-50 rounded-b-sm" popover="auto" id="menubar-settings">
      <div className="menubar-dropdown-item flex items-center w-50 px-2">
        <button className="me-2" onClick={onTheme}>
          Theme
        </button>
        <span className="text-xs opacity-30 text-right">
          <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>T</kbd>
        </span>
      </div>
      <div className="menubar-dropdown-item flex items-center w-50 px-2">
        <button className="me-2" onClick={onLanguage}>
          Language
        </button>
        <span className="text-xs opacity-30 text-right">
          <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd>
        </span>
      </div>
    </div>
  );
};

export default SettingsOptions;
