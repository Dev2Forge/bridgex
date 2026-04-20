/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosrive@Dev2Forge.software)
 *
 * File: \src\App.tsx
 * Created: Monday, 20th April 2026 7:16:28 am
 * -----
 * Last Modified: Monday, 20th April 2026 11:29:29 am
 * Modified By: tutosrive (tutosrive@Dev2Forge.software)
 * -----
 */

import { useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import './App.css';
import DefaultLayout from './layouts/Default';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke('greet', { name }));
  }

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
