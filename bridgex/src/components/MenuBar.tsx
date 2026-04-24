/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosriveorg@gmail.com)
 *
 * File: \src\components\NavBar.tsx
 * Created: Monday, 20th April 2026 10:04:01 am
 * -----
 * Last Modified: Friday, 24th April 2026 4:03:13 pm
 * Modified By: tutosrive (tutosriveorg@gmail.com)
 * -----
 */

import { useState, MouseEvent } from 'react';
import '../assets/css/MenuBar.css';
import FileOptions from './MenuBarDialogs/FileOptions';
import SettingsOptions from './MenuBarDialogs/SettingsOptions';
import HelpOptions from './MenuBarDialogs/HelpOptions';

interface MenuProps {
  data?: any;
}

const MenuBar: React.FC<MenuProps> = () => {
  const [itemActive, setItemActive] = useState<string>();

  const handleItemMenuClick = (e: MouseEvent): void => {
    setItemActive(e.currentTarget.id);
  };

  return (
    <nav className="menubar">
      <div>
        <button id="menuitem-file" className="item-menubar" onClick={handleItemMenuClick}>
          File
        </button>
        {itemActive === 'menuitem-file' && <FileOptions />}
      </div>
      <div>
        <button id="menuitem-settings" className="item-menubar" onClick={handleItemMenuClick}>
          Settings
        </button>
        {itemActive === 'menuitem-settings' && <SettingsOptions />}
      </div>
      <div>
        <button id="menuitem-help" className="item-menubar" onClick={handleItemMenuClick}>
          Help
        </button>
        {itemActive === 'menuitem-help' && <HelpOptions />}
      </div>
    </nav>
  );
};

export default MenuBar;
