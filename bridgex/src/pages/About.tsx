/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosrive@Dev2Forge.software)
 *
 * File: \src\pages\About.tsx
 * Created: Monday, 20th April 2026 9:58:42 am
 * -----
 * Last Modified: Monday, 20th April 2026 6:04:37 pm
 * Modified By: tutosrive (tutosrive@Dev2Forge.software)
 * -----
 */
interface AboutProps {
  data?: any;
}

const APP_VERSION: string = import.meta.env.VITE_APP_VERSION;

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <div>
      <pre>{APP_VERSION}</pre>
      <kbd>ctrl</kbd> + <kbd>s</kbd>
    </div>
  );
};

export default About;
