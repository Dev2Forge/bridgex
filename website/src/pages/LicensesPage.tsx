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
              {t('licenses.intro')}
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
            <h2>GPL-3.0 License</h2>
            <div className="mit-license-text code-block">
              <pre>{`GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, version 3 only.

See https://www.gnu.org/licenses/gpl-3.0.en.html for the full license text.`}</pre>
            </div>
          </div>

          <div className="lgpl-notice glass-card">
            <h3>Dependency License Notice</h3>
            <p>
              Some dependencies are dual-licensed under MIT OR Apache-2.0. Please review each
              dependency's license terms before redistribution.
            </p>
            <p>
              Full texts:
              <a 
                href="https://www.apache.org/licenses/LICENSE-2.0" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Apache-2.0
              </a>
              {' '}and{' '}
              <a 
                href="https://opensource.org/licenses/MIT" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                MIT
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
