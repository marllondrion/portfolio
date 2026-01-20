import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { useApp } from '../../../AppContext';

export const Navbar: React.FC = () => {
    const { lang, setLang, theme, toggleTheme, data } = useApp();
    const [isOpen, setIsOpen] = useState(false);
    const nav = data.nav;

    const getNavLabel = (id: string) => {
        const key = id === 'journey' ? 'experience' : id;
        return String(nav[key] || id);
    };

    const navLinks = ['home', 'about', 'journey', 'skills', 'education', 'contact'];

    return (
        <nav className={styles.navWrapper}>
            <div className={styles.navContainer}>

                {/* Logo/Brand */}
                <div className={styles.logoGroup}>
                    <div className={styles.logoIcon}>M</div>
                    <span className={styles.logoText}>Marllon Drion</span>
                </div>

                {/* Desktop Navigation */}
                <div className={styles.desktopMenu}>
                    {navLinks.map(id => (
                        <a key={id} href={`#${id}`} className={styles.navLink}>
                            {getNavLabel(id)}
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className={styles.actions}>
                    <button onClick={() => setLang(lang === 'en' ? 'pt' : 'en')} className={styles.langBtn}>
                        {lang === 'en' ? 'PT' : 'EN'}
                    </button>

                    <button onClick={toggleTheme} className={styles.themeBtn} aria-label="Toggle Theme">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>

                    {/* Hamburger Menu */}
                    <button onClick={() => setIsOpen(!isOpen)} className={styles.hamburger}>
                        <span className={`${styles.burgerLine} ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`${styles.burgerLine} ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`${styles.burgerLine} ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenuOverlay} ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
                <div className={styles.mobileMenuLinks}>
                    {navLinks.map(id => (
                        <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)} className={styles.navLink}>
                            {getNavLabel(id)}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};