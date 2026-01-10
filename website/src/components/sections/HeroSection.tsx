import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Download, BookOpen, ArrowRight } from 'lucide-react';
import './HeroSection.css';

const LOGO_URL = 'https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/logos/bridgex-v0.1.0.webp';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="hero-bg">
        <div className="hero-gradient" />
        <div className="hero-grid" />
      </div>
      
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge badge-primary">Open Source</span>
            <span className="badge badge-secondary">v0.1.0</span>
          </div>
          
          <h1 className="hero-title">
            <span className="gradient-text">{t('hero.title')}</span>
          </h1>
          
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          
          <p className="hero-description">{t('hero.description')}</p>
          
          <div className="hero-cta">
            <Link to="/downloads" className="btn btn-primary">
              <Download size={20} />
              {t('hero.cta.download')}
              <ArrowRight size={18} />
            </Link>
            <Link to="/documentation" className="btn btn-outline">
              <BookOpen size={20} />
              {t('hero.cta.documentation')}
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">15+</span>
              <span className="stat-label">Formats</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">MIT</span>
              <span className="stat-label">License</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">3</span>
              <span className="stat-label">Platforms</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-logo-container">
            <img 
              src={LOGO_URL} 
              alt="BridgeX Logo" 
              className="hero-logo animate-float"
            />
            <div className="hero-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}
