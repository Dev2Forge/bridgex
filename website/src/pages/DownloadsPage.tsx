import { useTranslation } from 'react-i18next';
import { 
  Download, 
  Monitor, 
  Terminal, 
  ExternalLink,
  HardDrive,
  Cpu,
  MemoryStick,
  CheckCircle2
} from 'lucide-react';
import './DownloadsPage.css';

export default function DownloadsPage() {
  const { t } = useTranslation();

  return (
    <div className="downloads-page">
      <section className="downloads-hero">
        <div className="container">
          <div className="page-header">
            <h1>{t('downloads.title')}</h1>
            <p>{t('downloads.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="downloads-content section">
        <div className="container">
          <div className="downloads-grid">
            {/* Windows Download */}
            <div className="download-card glass-card">
              <div className="download-icon windows">
                <Monitor size={32} />
              </div>
              <h3>{t('downloads.windows.title')}</h3>
              <p className="download-description">
                {t('downloads.windows.description')}
              </p>
              
              <a 
                href="https://sourceforge.net/projects/bridgex/files/latest/download"
                className="btn btn-primary download-btn"
              >
                <Download size={20} />
                {t('downloads.windows.button')}
              </a>

              <p className="download-note">{t('downloads.windows.note')}</p>
            </div>

            {/* Linux/macOS Download */}
            <div className="download-card glass-card">
              <div className="download-icon linux">
                <Terminal size={32} />
              </div>
              <h3>{t('downloads.linux.title')}</h3>
              <p className="download-description">
                {t('downloads.linux.description')}
              </p>
              
              <div className="code-block pip-command">
                <code>pip install bridgex</code>
              </div>

              <a 
                href="https://pypi.org/project/bridgex/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary download-btn"
              >
                <ExternalLink size={20} />
                View on PyPI
              </a>

              <p className="download-note">{t('downloads.linux.note')}</p>
            </div>

            {/* SourceForge */}
            <div className="download-card glass-card">
              <div className="download-icon sourceforge">
                <Download size={32} />
              </div>
              <h3>{t('downloads.sourceforge.title')}</h3>
              <p className="download-description">
                {t('downloads.sourceforge.description')}
              </p>
              
              <a 
                href="https://sourceforge.net/projects/bridgex/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent download-btn"
              >
                <ExternalLink size={20} />
                {t('downloads.sourceforge.button')}
              </a>
            </div>
          </div>

          {/* System Requirements */}
          <div className="requirements-section">
            <h2>{t('downloads.requirements.title')}</h2>
            <div className="requirements-grid">
              <div className="requirement-item">
                <Cpu size={24} />
                <div>
                  <h4>Python (PyPI only)</h4>
                  <p>{t('downloads.requirements.python')}</p>
                </div>
              </div>
              <div className="requirement-item">
                <Monitor size={24} />
                <div>
                  <h4>OS</h4>
                  <p>{t('downloads.requirements.os')}</p>
                </div>
              </div>
              <div className="requirement-item">
                <MemoryStick size={24} />
                <div>
                  <h4>RAM</h4>
                  <p>{t('downloads.requirements.memory')}</p>
                </div>
              </div>
              <div className="requirement-item">
                <HardDrive size={24} />
                <div>
                  <h4>Disk</h4>
                  <p>{t('downloads.requirements.disk')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="included-section glass-card">
            <h3>What's Included</h3>
            <div className="included-list">
              <div className="included-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>Freya UI (Rust, Skia-powered) interface</span>
              </div>
              <div className="included-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>Markitdown-rs with format plugins</span>
              </div>
              <div className="included-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>Native Rust binary (Python only for PyPI distribution)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
