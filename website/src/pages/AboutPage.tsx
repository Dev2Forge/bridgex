import { useTranslation } from 'react-i18next';
import { 
  CheckCircle2, 
  XCircle, 
  Package,
  Github,
  ExternalLink,
  Users,
  Heart
} from 'lucide-react';
import './AboutPage.css';

const LOGO_URL = 'https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/logos/bridgex-v0.1.0.webp';

export default function AboutPage() {
  const { t } = useTranslation();

  const whatItDoes = t('about.whatItDoes.items', { returnObjects: true }) as string[];
  const whatItDoesNot = t('about.whatItDoesNot.items', { returnObjects: true }) as string[];
  const whyLargeItems = t('about.whyLarge.items', { returnObjects: true }) as string[];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <img src={LOGO_URL} alt="Bridgex Logo" className="about-logo" />
            <div className="about-hero-text">
              <h1>{t('about.title')}</h1>
              <p className="about-subtitle">{t('about.subtitle')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content section">
        <div className="container">
          <div className="about-description glass-card">
            <p>{t('about.description')}</p>
          </div>

          <div className="about-grid">
            {/* What it does */}
            <div className="about-card glass-card">
              <div className="about-card-header does">
                <CheckCircle2 size={24} />
                <h3>{t('about.whatItDoes.title')}</h3>
              </div>
              <ul className="about-list">
                {whatItDoes.map((item, index) => (
                  <li key={index}>
                    <CheckCircle2 size={18} className="icon-does" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What it does NOT */}
            <div className="about-card glass-card">
              <div className="about-card-header does-not">
                <XCircle size={24} />
                <h3>{t('about.whatItDoesNot.title')}</h3>
              </div>
              <ul className="about-list">
                {whatItDoesNot.map((item, index) => (
                  <li key={index}>
                    <XCircle size={18} className="icon-does-not" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why is it large */}
          <div className="size-section glass-card">
            <div className="size-header">
              <Package size={28} />
              <h3>{t('about.whyLarge.title')}</h3>
            </div>
            <p className="size-description">{t('about.whyLarge.description')}</p>
            <div className="size-items">
              {whyLargeItems.map((item, index) => (
                <div key={index} className="size-item">
                  <div className="size-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="team-section">
            <h2>
              <Users size={28} />
              {t('about.team.title')}
            </h2>
            <div className="team-grid">
              <div className="team-card glass-card">
                <div className="team-avatar">
                  <img 
                    src="https://avatars.githubusercontent.com/u/108991712" 
                    alt="tutosrive" 
                  />
                </div>
                <h4>tutosrive</h4>
                <p>Maintainer</p>
                <a 
                  href="https://github.com/tutosrive" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="team-link"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>
              <div className="team-card glass-card">
                <div className="team-avatar org">
                  <img 
                    src="https://avatars.githubusercontent.com/u/215212095" 
                    alt="Dev2Forge" 
                  />
                </div>
                <h4>Dev2Forge</h4>
                <p>Organization</p>
                <a 
                  href="https://github.com/Dev2Forge" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="team-link"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="links-section">
            <h2>{t('about.links.github')}</h2>
            <div className="links-grid">
              <a 
                href="https://github.com/Dev2Forge/bridgex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="link-card glass-card"
              >
                <Github size={32} />
                <span>GitHub Repository</span>
                <ExternalLink size={16} />
              </a>
              <a 
                href="https://pypi.org/project/bridgex/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="link-card glass-card"
              >
                <Package size={32} />
                <span>PyPI Package</span>
                <ExternalLink size={16} />
              </a>
              <a 
                href="https://sourceforge.net/projects/bridgex/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="link-card glass-card"
              >
                <Heart size={32} />
                <span>SourceForge</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
