import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Github, Package, BookOpen, Heart, Coffee } from 'lucide-react';
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
              <img src={LOGO_URL} alt="BridgeX" className="footer-logo" />
              <span className="footer-title">BridgeX</span>
            </Link>
            <p className="footer-description">
              {t('hero.subtitle')}
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
            {t('footer.madeWith')} <Heart size={16} className="heart-icon" /> {t('footer.and')} <Coffee size={16} />
          </p>
        </div>
      </div>
    </footer>
  );
}
