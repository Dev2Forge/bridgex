/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosrive@Dev2Forge.software)
 *
 * File: \src\layouts\Default.tsx
 * Created: Monday, 20th April 2026 10:02:50 am
 * -----
 * Last Modified: Monday, 20th April 2026 1:03:50 pm
 * Modified By: tutosrive (tutosrive@Dev2Forge.software)
 * -----
 */

import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import '../assets/css/DefaultLayout.css';

const DefaultLayout = () => {
  return (
    <div className="defaul-container">
      <MenuBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
