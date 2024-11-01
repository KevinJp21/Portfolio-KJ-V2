import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { useTranslation } from 'react-i18next';
import { MonitorIcon, SunIcon, MoonIcon, WorldIcon } from '~/assets/Icons/icons';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [scroll, setScroll] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = sessionStorage.getItem('dark-mode');
      return savedMode !== null ? savedMode : 'system';
    }
    return 'system';
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const changeThemeMode = (mode: string) => {
    setDarkMode(mode);
    sessionStorage.setItem('dark-mode', mode);
  };

  useEffect(() => {
    if (darkMode === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark-mode', prefersDark);
    } else {
      document.documentElement.classList.toggle('dark-mode', darkMode === 'dark');
    }
  }, [darkMode]);

  const handleDropdownClick = () => setDropdownOpen(!dropdownOpen);

  const handleOptionClick = (option: string) => {
    changeThemeMode(option);
    setDropdownOpen(false);
  };

  const optionsTheme = [
    { label: 'Claro', value: 'light' },
    { label: 'Oscuro', value: 'dark' },
    { label: 'Auto', value: 'system' },
  ];

  const renderIcon = () => {
    switch (darkMode) {
      case 'light':
        return <SunIcon />;
      case 'dark':
        return <MoonIcon />;
      case 'system':
      default:
        return <MonitorIcon />;
    }
  };

  const [lngMode, setLngMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLNG = sessionStorage.getItem('lng');
      return savedLNG !== null ? savedLNG : 'en';
    }
    return 'en';
  });

  const changeLNGMode = (mode: string) => {
    setLngMode(mode);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('lng', mode);
    }
    i18n.changeLanguage(mode);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLNG = sessionStorage.getItem('lng');
      if (savedLNG && savedLNG !== i18n.language) {
        i18n.changeLanguage(savedLNG);
      }
    }
  }, [i18n]);

  const handleLanguageChange = (lng: string) => {
    changeLNGMode(lng);
    setLanguageDropdownOpen(false);
  };

  const languages = [
    { label: 'Español', value: 'es' },
    { label: 'English', value: 'en' },
  ];


  return (
    <header className={`NavBar${scroll ? ' scrolled' : ''}`}>
      <nav className='NavBarHome'>
        <div className="containerNavHome">
          <h1>Kevin Julio Pineda</h1>
          <div className="navHome">
            <ul className="menuHome">
              <li><a className="LinkNavHome Start" href='/#Start'><span className='linkText'>{t('Header.start')}</span></a></li>
              <li><a className="LinkNavHome Projects" href="/#Projects"><span className='linkText'>{t('Header.projects')}</span></a></li>
              <li><a className="LinkNavHome About" href='/#About'><span className='linkText'>{t('Header.about_me')}</span></a></li>
              <li><a className="LinkNavHome Skills" href="/#Skills"><span className='linkText'>{t('Header.skills')}</span></a></li>
              <li><a className="LinkNavHome Contact" href="mailto: kevinjp821@gmail.com"><span className='linkText'>{t('Header.contact')}</span></a></li>
              <li>
                <div className="dropdown">
                  <button title={t("Header.BtnThemMode")} className={`select ${dropdownOpen ? 'select-clicked' : ''}`} onClick={handleDropdownClick}>
                    {renderIcon()}
                    <span className="selected"></span>
                  </button>
                  {dropdownOpen && (
                    <ul className="menu menu-open">
                      {optionsTheme.map(option => (
                        <li key={option.value} className={option.value === darkMode ? 'active' : ''} onClick={() => handleOptionClick(option.value)}>
                          <span>{option.label}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <button title={t("Header.BtnTLanguage")} className={`select ${languageDropdownOpen ? 'select-clicked' : ''}`} onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}>
                    <WorldIcon />
                    <span className="selected"></span>
                  </button>
                  {languageDropdownOpen && (
                    <ul className="menu menu-open">
                      {languages.map(language => (
                        <li key={language.value} className={language.value === lngMode ? 'active' : ''} onClick={() => handleLanguageChange(language.value)}>
                          <span>{language.label}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
