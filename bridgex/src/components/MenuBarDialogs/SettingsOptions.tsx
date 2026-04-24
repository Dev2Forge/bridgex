/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosriveorg@gmail.com)
 *
 * File: \src\components\MenuBarDialogs\SettingsOptions.tsx
 * Created: Friday, 24th April 2026 4:00:41 pm
 * -----
 * Last Modified: Friday, 24th April 2026 4:02:47 pm
 * Modified By: tutosrive (tutosriveorg@gmail.com)
 * -----
 */

export default function SettingsOptions() {
  return (
    <div className="fixed bg-taupe-950 p-2 ms-1 mt-1 text-taupe-50 rounded-b-sm">
      <div>
        <button className="item-menubar">Change Theme</button>
      </div>
      <div>
        <button className="item-menubar">Change Language</button>
      </div>
    </div>
  );
}
