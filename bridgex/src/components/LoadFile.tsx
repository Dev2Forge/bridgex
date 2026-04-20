/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosrive@Dev2Forge.software)
 *
 * File: \src\components\LoadFile.tsx
 * Created: Monday, 20th April 2026 9:59:59 am
 * -----
 * Last Modified: Monday, 20th April 2026 11:04:52 am
 * Modified By: tutosrive (tutosrive@Dev2Forge.software)
 * -----
 */

interface LoadFileProps {
  data?: any;
}

const LoadFile: React.FC<LoadFileProps> = ({ data }) => {
  return (
    <div>
      <label htmlFor="loadFile">Load File:</label>
      <input type="file" name="loadFile" id="load-file" />
    </div>
  );
};

export default LoadFile;
