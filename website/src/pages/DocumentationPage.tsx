import { useTranslation } from 'react-i18next';
import { 
  Download,
  AlertTriangle,
  CheckCircle2,
  FileType,
  Wrench,
  Book
} from 'lucide-react';
import './DocumentationPage.css';

export default function DocumentationPage() {
  const { t } = useTranslation();

  const formats = t('documentation.formats.list', { returnObjects: true }) as string[];

  return (
    <div className="documentation-page">
      <section className="docs-hero">
        <div className="container">
          <div className="page-header">
            <h1>{t('documentation.title')}</h1>
            <p>{t('documentation.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="docs-content section">
        <div className="container">
          <div className="docs-layout">
            {/* Sidebar Navigation */}
            <aside className="docs-sidebar">
              <nav className="docs-nav">
                <a href="#installation" className="docs-nav-link">
                  <Download size={18} />
                  {t('documentation.installation.title')}
                </a>
                <a href="#usage" className="docs-nav-link">
                  <Book size={18} />
                  {t('documentation.usage.title')}
                </a>
                <a href="#formats" className="docs-nav-link">
                  <FileType size={18} />
                  {t('documentation.formats.title')}
                </a>
                <a href="#troubleshooting" className="docs-nav-link">
                  <Wrench size={18} />
                  {t('documentation.troubleshooting.title')}
                </a>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="docs-main">
              {/* Installation Section */}
              <section id="installation" className="docs-section">
                <h2>
                  <Download size={24} />
                  {t('documentation.installation.title')}
                </h2>

                <div className="docs-card">
                  <h3>{t('documentation.installation.pip.title')}</h3>
                  <ol className="docs-steps">
                    <li>
                      <span className="step-number">1</span>
                      <div className="step-content">
                        <p>{t('documentation.installation.pip.step1')}</p>
                      </div>
                    </li>
                    <li>
                      <span className="step-number">2</span>
                      <div className="step-content">
                        <p>{t('documentation.installation.pip.step2')}</p>
                        <div className="code-block">
                          <code>python -m venv .venv</code>
                        </div>
                        <div className="code-block">
                          <code># Windows{'\n'}.venv\Scripts\activate{'\n'}{'\n'}# Linux/macOS{'\n'}source .venv/bin/activate</code>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span className="step-number">3</span>
                      <div className="step-content">
                        <p>{t('documentation.installation.pip.step3')}</p>
                        <div className="code-block">
                          <code>pip install bridgex</code>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span className="step-number">4</span>
                      <div className="step-content">
                        <p>{t('documentation.installation.pip.step4')}</p>
                        <div className="code-block">
                          <code>bridgex</code>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="docs-card">
                  <h3>{t('documentation.installation.windows.title')}</h3>
                  <ol className="docs-steps">
                    <li>
                      <span className="step-number">1</span>
                      <div className="step-content">
                        <p>{t('documentation.installation.windows.step1')}</p>
                      </div>
                    </li>
                    <li>
                      <span className="step-number">2</span>
                      <div className="step-content">
                        <p>{t('documentation.installation.windows.step2')}</p>
                      </div>
                    </li>
                    <li>
                      <span className="step-number">3</span>
                      <div className="step-content">
                        <p>{t('documentation.installation.windows.step3')}</p>
                      </div>
                    </li>
                    <li>
                      <span className="step-number">4</span>
                      <div className="step-content">
                        <p>{t('documentation.installation.windows.step4')}</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </section>

              {/* Usage Section */}
              <section id="usage" className="docs-section">
                <h2>
                  <Book size={24} />
                  {t('documentation.usage.title')}
                </h2>

                <div className="docs-card">
                  <ol className="usage-steps">
                    <li>
                      <CheckCircle2 size={20} className="check-icon" />
                      <span>{t('documentation.usage.step1')}</span>
                    </li>
                    <li>
                      <CheckCircle2 size={20} className="check-icon" />
                      <span>{t('documentation.usage.step2')}</span>
                    </li>
                    <li>
                      <CheckCircle2 size={20} className="check-icon" />
                      <span>{t('documentation.usage.step3')}</span>
                    </li>
                    <li>
                      <CheckCircle2 size={20} className="check-icon" />
                      <span>{t('documentation.usage.step4')}</span>
                    </li>
                    <li>
                      <CheckCircle2 size={20} className="check-icon" />
                      <span>{t('documentation.usage.step5')}</span>
                    </li>
                  </ol>
                </div>
              </section>

              {/* Formats Section */}
              <section id="formats" className="docs-section">
                <h2>
                  <FileType size={24} />
                  {t('documentation.formats.title')}
                </h2>

                <div className="docs-card">
                  <div className="formats-grid">
                    {formats.map((format, index) => (
                      <div key={index} className="format-item">
                        <CheckCircle2 size={16} className="check-icon" />
                        <span>{format}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Troubleshooting Section */}
              <section id="troubleshooting" className="docs-section">
                <h2>
                  <Wrench size={24} />
                  {t('documentation.troubleshooting.title')}
                </h2>

                <div className="troubleshooting-card">
                  <div className="trouble-header">
                    <AlertTriangle size={20} className="warning-icon" />
                    <h4>{t('documentation.troubleshooting.vcredist.title')}</h4>
                  </div>
                  <p>{t('documentation.troubleshooting.vcredist.description')}</p>
                  <div className="code-block">
                    <code>https://aka.ms/vs/17/release/vc_redist.x64.exe</code>
                  </div>
                </div>

                <div className="troubleshooting-card">
                  <div className="trouble-header">
                    <AlertTriangle size={20} className="warning-icon" />
                    <h4>{t('documentation.troubleshooting.permissions.title')}</h4>
                  </div>
                  <p>{t('documentation.troubleshooting.permissions.description')}</p>
                </div>

                <div className="troubleshooting-card">
                  <div className="trouble-header">
                    <AlertTriangle size={20} className="warning-icon" />
                    <h4>{t('documentation.troubleshooting.pyside.title')}</h4>
                  </div>
                  <p>{t('documentation.troubleshooting.pyside.description')}</p>
                  <div className="code-block">
                    <code>sudo apt-get install libxcb-xinerama0 libxcb-cursor0</code>
                  </div>
                </div>

                <div className="troubleshooting-card">
                  <div className="trouble-header">
                    <AlertTriangle size={20} className="warning-icon" />
                    <h4>{t('documentation.troubleshooting.display.title')}</h4>
                  </div>
                  <p>{t('documentation.troubleshooting.display.description')}</p>
                </div>
              </section>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
