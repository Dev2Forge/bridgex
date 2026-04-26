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
 * Last Modified: Saturday, 25th April 2026 7:33:10 pm
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
    <div className="menubar-dropdown settingsoptions" popover="auto" id="menubar-settings">
      <div className="menubar-dropdown-item">
        <button onClick={onTheme}>Theme</button>
        <span>
          <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>T</kbd>
        </span>
      </div>
      <div className="menubar-dropdown-item">
        <button onClick={onLanguage}>Language</button>
        <span>
          <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd>
        </span>
      </div>
    </div>
  );
};

export default SettingsOptions;
