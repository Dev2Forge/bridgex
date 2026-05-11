import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Download, BookOpen, ArrowRight } from 'lucide-react';
import './HeroSection.css';

const LOGO_URL = 'https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/logos/bridgex-v0.1.0.webp';

const MarkitdownPreview = (
  <a 
    href="https://crates.io/crates/markitdown" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="preview-link"
  >
    markitdown-rs
    <span className="preview-tooltip">
      <span className="tooltip-content">
        <span className="tooltip-title">markitdown-rs</span>
        <span className="tooltip-desc">Rust crate for converting various files to Markdown (e.g., for LLM use)</span>
        <span className="tooltip-url">crates.io/crates/markitdown</span>
      </span>
    </span>
  </a>
);

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
            <span className="badge badge-secondary">v0.2.1</span>
          </div>
          
          <h1 className="hero-title">
            <span className="gradient-text">{t('hero.title')}</span>
          </h1>
          
          <p className="hero-subtitle">
            <Trans i18nKey="hero.subtitle" components={[MarkitdownPreview]} />
          </p>
          
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
              <span className="stat-value">GPLv3</span>
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
              alt="Bridgex Logo" 
              className="hero-logo animate-float"
            />
            <div className="hero-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}
