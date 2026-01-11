import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Github, Package, BookOpen } from 'lucide-react';
import './Footer.css';

const LOGO_URL = 'https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/logos/bridgex-v0.1.0.webp';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img src={LOGO_URL} alt="Bridgex" className="footer-logo" />
              <span className="footer-title">Bridgex</span>
            </Link>
            <p className="footer-description">
              Tu Puente hacia markitdown
            </p>
          </div>

          <div className="footer-links-section">
            <h4>Navigation</h4>
            <nav className="footer-nav">
              <Link to="/">{t('nav.home')}</Link>
              <Link to="/downloads">{t('nav.downloads')}</Link>
              <Link to="/documentation">{t('nav.documentation')}</Link>
              <Link to="/about">{t('nav.about')}</Link>
              <Link to="/licenses">{t('nav.licenses')}</Link>
            </nav>
          </div>

          <div className="footer-links-section">
            <h4>Resources</h4>
            <nav className="footer-nav">
              <a 
                href="https://github.com/Dev2Forge/bridgex" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github size={16} />
                {t('footer.links.github')}
              </a>
              <a 
                href="https://pypi.org/project/bridgex/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Package size={16} />
                {t('footer.links.pypi')}
              </a>
              <a 
                href="https://github.com/microsoft/markitdown" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BookOpen size={16} />
                Markitdown
              </a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Dev2Forge. {t('footer.license')}
          </p>
          <p className="footer-made-with">
            Hecho con 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart heart-icon" aria-hidden="true">
              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
            </svg> y 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coffee" aria-hidden="true">
              <path d="M10 2v2"></path>
              <path d="M14 2v2"></path>
              <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path>
              <path d="M6 2v2"></path>
            </svg>
          </p>
        </div>
      </div>
    </footer>
  );
}
