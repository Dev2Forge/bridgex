import { useState, useEffect, useRef, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import { Menu, X, Sun, Moon, Globe, Home, Download, BookOpen, Info, Scale } from 'lucide-react';
import './Navbar.css';
import Marquee from 'react-fast-marquee';

const LOGO_URL = 'https://cdn.jsdelivr.net/gh/tutosrive/images-projects-srm-trg@main/dev2forge/logos/bridgex-v0.1.0.webp';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsLangOpen(false);
  }, [location]);

  const languages = useMemo(() => {
    const countryCodes: Record<string, string> = { en: 'us', es: 'co', pt: 'pt', zh: 'cn', hi: 'in', fr: 'fr', ar: 'sa', ru: 'ru', de: 'de', ja: 'jp' };
    return ['en', 'es', 'pt', 'zh', 'hi', 'fr', 'ar', 'ru', 'de', 'ja'].map((code) => ({ code, flagUrl: `https://flagcdn.com/${countryCodes[code]}.svg`, label: code.toUpperCase() }));
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };

    if (isLangOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangOpen]);

  // Close language dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLangOpen(false);
      }
    };

    if (isLangOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isLangOpen]);

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('bridgex-lang', langCode);
    setIsLangOpen(false);
  };

  const navLinks = [
    { to: '/', label: t('nav.home'), icon: Home },
    { to: '/downloads', label: t('nav.downloads'), icon: Download },
    { to: '/documentation', label: t('nav.documentation'), icon: BookOpen },
    { to: '/about', label: t('nav.about'), icon: Info },
    { to: '/licenses', label: t('nav.licenses'), icon: Scale },
  ];

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Marquee className="marquee-top">
        This program is being refactored to improve performance and reduce its size as much as possible. It will be rewritten using <a href="https://slint.dev"> Slint</a> and <a href="https://rust-lang.org/">Rust</a>.
      </Marquee>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          <img src={LOGO_URL} alt="Bridgex Logo" className="navbar-logo" />
          <span className="navbar-title">Bridgex</span>
        </NavLink>

        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="navbar-links">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}>
                <Icon size={18} />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>

          <div className="navbar-actions">
            <div className="language-selector" ref={langDropdownRef}>
              <button className="lang-toggle" onClick={() => setIsLangOpen(!isLangOpen)} aria-label="Select language">
                <Globe size={20} />
                <span>{currentLang.code.toUpperCase()}</span>
              </button>

              {isLangOpen && (
                <div className="lang-dropdown">
                  {languages.map((lang) => (
                    <button key={lang.code} className={`lang-option ${i18n.language === lang.code ? 'active' : ''}`} onClick={() => changeLanguage(lang.code)}>
                      <span className="lang-text">{lang.label}</span>
                      <img src={lang.flagUrl} alt={lang.label} className="lang-flag-icon" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>

        <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
