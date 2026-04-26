/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosriveorg@gmail.com)
 *
 * File: \src\components\MenuBarDialogs\HelpOptions.tsx
 * Created: Friday, 24th April 2026 4:01:18 pm
 * -----
 * Last Modified: Saturday, 25th April 2026 7:33:02 pm
 * Modified By: tutosrive (tutosriveorg@gmail.com)
 * -----
 */

import { FC } from 'react';

interface HelpOptionsProps {
  onAbout: () => void;
  onLicences: () => void;
}

const HelpOptions: FC<HelpOptionsProps> = ({ onAbout, onLicences }) => {
  return (
    <div className="menubar-dropdown helpoptions" popover="auto" id="menubar-help">
      <div className="menubar-dropdown-item">
        <button onClick={onAbout}>About</button>
        <span>
          <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd>
        </span>
      </div>
      <div className="menubar-dropdown-item">
        <button onClick={onLicences}>Licences</button>
        <span>
          <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd>
        </span>
      </div>
    </div>
  );
};

export default HelpOptions;
