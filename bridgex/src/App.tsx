/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosriveorg@gmail.com)
 *
 * File: \src\App.tsx
 * Created: Monday, 20th April 2026 7:16:28 am
 * -----
 * Last Modified: Friday, 24th April 2026 2:34:53 pm
 * Modified By: tutosrive (tutosriveorg@gmail.com)
 * -----
 */

import './App.css';
import DefaultLayout from './layouts/Default';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
