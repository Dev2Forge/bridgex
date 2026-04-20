/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosrive@Dev2Forge.software)
 *
 * File: \src\main.tsx
 * Created: Monday, 20th April 2026 7:16:28 am
 * -----
 * Last Modified: Monday, 20th April 2026 10:56:36 am
 * Modified By: tutosrive (tutosrive@Dev2Forge.software)
 * -----
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import App from './App';

const basename = import.meta.env.BASE_URL || '/';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
