import { useTranslation } from 'react-i18next';
import { Scale, ExternalLink } from 'lucide-react';
import { licenses } from '../data/licenses';
import './LicensesPage.css';

export default function LicensesPage() {
  const { t } = useTranslation();

  return (
    <div className="licenses-page">
      <section className="licenses-hero">
        <div className="container">
          <div className="page-header">
            <Scale size={48} className="licenses-icon" />
            <h1>{t('licenses.title')}</h1>
            <p>{t('licenses.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="licenses-content section">
        <div className="container">
          <div className="licenses-intro glass-card">
            <p>
              BridgeX is open source software distributed under the MIT License. 
              It depends on several third-party libraries, each with their own licensing terms. 
              This page lists all major dependencies and their respective licenses.
            </p>
          </div>

          <div className="licenses-grid">
            {licenses.map((lib) => (
              <div key={lib.key} className="license-card glass-card">
                <div className="license-header">
                  <h3>{lib.name}</h3>
                  <span className="license-version">v{lib.version}</span>
                </div>
                
                <p className="license-description">{lib.description}</p>
                
                <div className="license-details">
                  <div className="license-badge">
                    <Scale size={14} />
                    <span>{lib.license}</span>
                  </div>
                  {lib.copyright && (
                    <span className="license-copyright">{lib.copyright}</span>
                  )}
                </div>

                <a 
                  href={lib.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="license-link"
                >
                  View Source
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>

          <div className="mit-license-section">
            <h2>MIT License</h2>
            <div className="mit-license-text code-block">
              <pre>{`MIT License

Copyright (c) 2025 Dev2Forge

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}</pre>
            </div>
          </div>

          <div className="lgpl-notice glass-card">
            <h3>LGPL-3.0 Notice (PySide6)</h3>
            <p>
              PySide6 is distributed under the LGPL-3.0-only license. This means that you can use 
              PySide6 in your applications without making your application open source, as long as 
              you dynamically link to the PySide6 libraries and provide a way for users to use 
              their own versions of PySide6.
            </p>
            <p>
              For more information about the LGPL license and your rights, please visit the 
              <a 
                href="https://www.gnu.org/licenses/lgpl-3.0.en.html" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GNU LGPL-3.0 License page
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
