import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import DownloadsPage from './pages/DownloadsPage';
import DocumentationPage from './pages/DocumentationPage';
import AboutPage from './pages/AboutPage';
import LicensesPage from './pages/LicensesPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/downloads" element={<DownloadsPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/licenses" element={<LicensesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
