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
 * Last Modified: Friday, 24th April 2026 10:52:29 pm
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
  const handleOpenFile = () => {
    console.log('Open File');
  };
  const handleSaveFile = () => {
    console.log('Save File');
  };
  const handleOnTheme = () => {
    console.log('Theme');
  };
  const handleOnLanguage = () => {
    console.log('Language');
  };
  const handleOnAbout = () => {
    console.log('About');
  };
  const handleOnLicences = () => {
    console.log('Licences');
  };

  return (
    <nav className="menubar">
      <div className="item-menubar">
        <button id="menuitem-file" popoverTarget="menubar-file">
          File
        </button>
        <FileOptions onOpenFile={handleOpenFile} onSaveFile={handleSaveFile} />
      </div>
      <div className="item-menubar">
        <button id="menuitem-settings" popoverTarget="menubar-settings">
          Settings
        </button>
        <SettingsOptions onTheme={handleOnTheme} onLanguage={handleOnLanguage} />
      </div>
      <div className="item-menubar">
        <button id="menuitem-help" popoverTarget="menubar-help">
          Help
        </button>
        <HelpOptions onAbout={handleOnAbout} onLicences={handleOnLicences} />
      </div>
    </nav>
  );
};

export default MenuBar;
