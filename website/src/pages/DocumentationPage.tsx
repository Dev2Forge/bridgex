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
                          <button className="copy-button" onClick={() => navigator.clipboard.writeText('python -m venv .venv')}>
                            Copy
                          </button>
                        </div>
                        <div className="code-block">
                          <p>Windows</p>
                          <code>.venv\Scripts\activate</code>
                          <button className="copy-button" onClick={() => navigator.clipboard.writeText('.venv\\Scripts\\activate')}>
                            Copy
                          </button>
                        </div>
                        <div className="code-block">
                          <p>Linux/macOS</p>
                          <code>source .venv/bin/activate</code>
                          <button className="copy-button" onClick={() => navigator.clipboard.writeText('source .venv/bin/activate')}>
                            Copy
                          </button>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span className="step-number">3</span>
                      <div className="step-content">
                        <p>{t('documentation.installation.pip.step3')}</p>
                        <div className="code-block">
                          <code>pip install bridgex</code>
                          <button className="copy-button" onClick={() => navigator.clipboard.writeText('pip install bridgex')}>
                            Copy
                          </button>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span className="step-number">4</span>
                      <div className="step-content">
                        <p>{t('documentation.installation.pip.step4')}</p>
                        <div className="code-block">
                          <code>bridgex</code>
                          <button className="copy-button" onClick={() => navigator.clipboard.writeText('bridgex')}>
                            Copy
                          </button>
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

            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
