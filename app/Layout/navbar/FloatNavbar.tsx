import React, { useState, useEffect } from 'react'
import './FloatNavbar.css'
//Iconos
import { HomeIcon, AboutIcon, ProjectIcon, ContactIcon, MonitorIcon, SunIcon, MoonIcon, ToolsIcon, WorldIcon } from '../../assets/Icons/icons';
import { useTranslation } from 'react-i18next';

const FloatNavbar = () => {
    const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = sessionStorage.getItem('dark-mode');
        return savedMode !== null ? savedMode : 'system';
    });
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


    const handleOptionClick = (option: string) => {
        changeThemeMode(option);
    };

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
        const savedLNG = sessionStorage.getItem('lng');
        return savedLNG !== null ? savedLNG : 'en';
    });

    const changeLNGMode = (mode: string) => {
        setLngMode(mode);
        sessionStorage.setItem('lng', mode);
        i18n.changeLanguage(mode);
    };

    useEffect(() => {
        const savedLNG = sessionStorage.getItem('lng');
        if (savedLNG && savedLNG !== i18n.language) {
            i18n.changeLanguage(savedLNG);
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
        <header className='FloatNavbar'>
            <nav className='FloatNavBarHome'>
                <div className="containerFloatNavHome">
                    <div className="FloatnavHome">
                        <ul className="FloatmenuHome">
                            <li><a className="LinkFloatNavHome Start" href='/#Start' aria-label="Start"><HomeIcon /></a></li>
                            <li><a className="LinkFloatNavHome Projects" href="/#Projects" aria-label="Projects"><ProjectIcon /></a></li>
                            <li><a className="LinkFloatNavHome About" href='/#About' aria-label="About" ><AboutIcon /></a></li>
                            <li><a className="LinkFloatNavHome Skills" href="/#Skills" aria-label="Skills"><ToolsIcon /></a></li>
                            <li><a className="LinkFloatNavHome Contact" href="mailto: kevinjp821@gmail.com" aria-label="Contact"><ContactIcon /></a></li>
                            <li>
                                <button title={t("Header.BtnThemMode")} className={`select ${darkMode}`} onClick={() => handleOptionClick(darkMode === 'light' ? 'dark' : darkMode === 'dark' ? 'system' : 'light')}>
                                    {renderIcon()}
                                </button>
                            </li>
                            <li>
                                <div className="dropdown">
                                    <button title={t("Header.BtnThemMode")} className={`select ${languageDropdownOpen ? 'select-clicked' : ''}`} onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}>
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
    )
}

export default FloatNavbar