import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';
import pt from './locales/pt.json';
import zh from './locales/zh.json';
import hi from './locales/hi.json';
import fr from './locales/fr.json';
import ar from './locales/ar.json';
import ru from './locales/ru.json';
import de from './locales/de.json';
import ja from './locales/ja.json';

const resources = {
  en: { translation: en },
  es: { translation: es },
  pt: { translation: pt },
  zh: { translation: zh },
  hi: { translation: hi },
  fr: { translation: fr },
  ar: { translation: ar },
  ru: { translation: ru },
  de: { translation: de },
  ja: { translation: ja }
};

const savedLanguage = localStorage.getItem('bridgex-lang');
const browserLanguage = navigator.language.split('-')[0];
const supportedLanguages = ['en', 'es', 'pt', 'zh', 'hi', 'fr', 'ar', 'ru', 'de', 'ja'];
const defaultLanguage = savedLanguage || (supportedLanguages.includes(browserLanguage) ? browserLanguage : 'en');

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
