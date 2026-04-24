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
 * Last Modified: Friday, 24th April 2026 2:34:59 pm
 * Modified By: tutosrive (tutosriveorg@gmail.com)
 * -----
 */
interface AboutProps {
  data?: any;
}

const APP_VERSION: string = import.meta.env.VITE_APP_VERSION;

const About: React.FC<AboutProps> = () => {
  return (
    <div>
      <pre>{APP_VERSION}</pre>
      <kbd>ctrl</kbd> + <kbd>s</kbd>
    </div>
  );
};

export default About;
