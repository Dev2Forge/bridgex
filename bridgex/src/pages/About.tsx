/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosriveorg@gmail.com)
 *
 * File: \src\pages\About.tsx
 * Created: Monday, 20th April 2026 9:58:42 am
 * -----
 * Last Modified: Friday, 24th April 2026 11:01:01 pm
 * Modified By: tutosrive (tutosriveorg@gmail.com)
 * -----
 */

const APP_VERSION: string = import.meta.env.VITE_APP_VERSION;

const About = () => {
  return (
    <div>
      <pre>{APP_VERSION}</pre>
      <kbd>ctrl</kbd> + <kbd>s</kbd>
    </div>
  );
};

export default About;
