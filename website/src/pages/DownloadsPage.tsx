import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import axios from 'axios';
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

interface ReleaseAsset {
  name: string;
  browser_download_url: string;
  size: number;
}

interface Release {
  tag_name: string;
  name: string;
  html_url: string;
  assets: ReleaseAsset[];
}

export default function DownloadsPage() {
  const { t } = useTranslation();
  const [latestRelease, setLatestRelease] = useState<Release | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRelease = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/Dev2Forge/bridgex/releases/latest'
        );
        setLatestRelease(response.data);
        setError(false);
      } catch {
        console.error('Failed to fetch release');
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRelease();
  }, []);

  const formatSize = (bytes: number) => {
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)} MB`;
  };

  const windowsAsset = latestRelease?.assets.find(a => a.name.endsWith('.exe'));

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
              
              {loading ? (
                <div className="loading-btn">Loading...</div>
              ) : error || !windowsAsset ? (
                <a 
                  href="https://github.com/Dev2Forge/bridgex/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary download-btn"
                >
                  <Download size={20} />
                  {t('downloads.windows.button')}
                </a>
              ) : (
                <a 
                  href={windowsAsset.browser_download_url}
                  className="btn btn-primary download-btn"
                >
                  <Download size={20} />
                  {t('downloads.windows.button')}
                </a>
              )}

              {windowsAsset && !error && (
                <span className="download-size">
                  {formatSize(windowsAsset.size)}
                </span>
              )}

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
                  <h4>Python</h4>
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
                <span>PySide6 (Qt for Python) GUI Framework</span>
              </div>
              <div className="included-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>Markitdown by Microsoft with all format plugins</span>
              </div>
              <div className="included-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>Bundled Python runtime (Windows installer)</span>
              </div>
              <div className="included-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>VC++ Redistributable (Windows installer)</span>
              </div>
              <div className="included-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>Multi-language interface support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
