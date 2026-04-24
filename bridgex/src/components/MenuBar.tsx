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
 * Last Modified: Friday, 24th April 2026 2:34:59 pm
 * Modified By: tutosrive (tutosriveorg@gmail.com)
 * -----
 */

import { NavLink } from 'react-router-dom';
import '../assets/css/MenuBar.css';

interface MenuProps {
  data?: any;
}

const MenuBar: React.FC<MenuProps> = () => {
  return (
    <nav className="menubar">
      <NavLink className="item-menubar" to={'/'}>
        File
      </NavLink>
      <NavLink className="item-menubar" to={'/about'}>
        Options
      </NavLink>
    </nav>
  );
};

export default MenuBar;
