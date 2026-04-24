/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosriveorg@gmail.com)
 *
 * File: \src\components\Footer.tsx
 * Created: Monday, 20th April 2026 10:09:06 am
 * -----
 * Last Modified: Friday, 24th April 2026 2:35:00 pm
 * Modified By: tutosrive (tutosriveorg@gmail.com)
 * -----
 */

interface FooterProps {
  data?: any;
}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear().toString();

  return (
    <>
      <pre>&copy; {currentYear} </pre>
    </>
  );
};

export default Footer;
