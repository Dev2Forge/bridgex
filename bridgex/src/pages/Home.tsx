/*
 * bridgex - Graphical interface for converting files to Markdown
 * Copyright 2026 - 2026 Dev2Forge
 * Licence: GPL-3
 * More information: https://github.com/Dev2Forge/bridgex/blob/main/LICENSE
 * Author: tutosrive (tutosrive@Dev2Forge.software)
 *
 * File: \src\pages\Home.tsx
 * Created: Monday, 20th April 2026 9:55:14 am
 * -----
 * Last Modified: Monday, 20th April 2026 11:06:34 am
 * Modified By: tutosrive (tutosrive@Dev2Forge.software)
 * -----
 */

import LoadFile from '../components/LoadFile';

interface HomeProps {
  data?: any;
}

const Home: React.FC<HomeProps> = ({ data }) => {
  return <LoadFile />;
};

export default Home;
