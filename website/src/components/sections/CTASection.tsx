import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Download, Github, ArrowRight } from 'lucide-react';
import './CTASection.css';

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <h2 className="cta-title">Ready to convert your files?</h2>
            <p className="cta-description">
              Download BridgeX today and start converting your documents to Markdown with ease.
            </p>
            <div className="cta-buttons">
              <Link to="/downloads" className="btn btn-primary">
                <Download size={20} />
                {t('hero.cta.download')}
                <ArrowRight size={18} />
              </Link>
              <a 
                href="https://github.com/Dev2Forge/bridgex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-glass"
              >
                <Github size={20} />
                View on GitHub
              </a>
            </div>
          </div>
          <div className="cta-decoration">
            <div className="cta-circle circle-1" />
            <div className="cta-circle circle-2" />
            <div className="cta-circle circle-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
