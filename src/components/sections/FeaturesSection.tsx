import { useTranslation } from 'react-i18next';
import { 
  Monitor, 
  FileStack, 
  Code2, 
  Edit3, 
  Languages, 
  Puzzle 
} from 'lucide-react';
import './FeaturesSection.css';

const features = [
  { key: 'crossPlatform', icon: Monitor },
  { key: 'multiFormat', icon: FileStack },
  { key: 'openSource', icon: Code2 },
  { key: 'lightEditor', icon: Edit3 },
  { key: 'multilingual', icon: Languages },
  { key: 'modular', icon: Puzzle }
];

export default function FeaturesSection() {
  const { t } = useTranslation();

  return (
    <section className="features-section section">
      <div className="container">
        <div className="section-title">
          <h2>{t('features.title')}</h2>
        </div>

        <div className="features-grid">
          {features.map(({ key, icon: Icon }, index) => (
            <div 
              key={key} 
              className="feature-card glass-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">
                <Icon size={28} />
              </div>
              <h3 className="feature-title">
                {t(`features.${key}.title`)}
              </h3>
              <p className="feature-description">
                {t(`features.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
