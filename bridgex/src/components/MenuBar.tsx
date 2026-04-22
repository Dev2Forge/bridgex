/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosrive@Dev2Forge.software)
 *
 * File: \src\components\NavBar.tsx
 * Created: Monday, 20th April 2026 10:04:01 am
 * -----
 * Last Modified: Monday, 20th April 2026 11:44:55 am
 * Modified By: tutosrive (tutosrive@Dev2Forge.software)
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
