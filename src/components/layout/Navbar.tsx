import React, { useState } from 'react';
import { useApp } from '../../AppContext';

export const Navbar: React.FC = () => {
    const { lang, setLang, theme, toggleTheme, data } = useApp();
    const [isOpen, setIsOpen] = useState(false);
    const nav = data.nav;

    // Helper to map section IDs to translation keys
    const getNavLabel = (id: string) => {
        const key = id === 'journey' ? 'experience' : id;
        return String(nav[key] || id);
    };

    const navLinks = ['home', 'about', 'journey', 'skills', 'education', 'contact'];

    return (
        <nav className="fixed top-0 w-full z-50 p-4 md:p-6 pointer-events-none">
            <div className="max-w-[1440px] mx-auto glass-card rounded-[1.5rem] md:rounded-[2rem] px-6 md:px-8 h-16 md:h-20 flex items-center justify-between shadow-2xl pointer-events-auto border dark:border-white/10 border-slate-200">

                {/* Logo/Brand */}
                <div className="flex items-center gap-3 md:gap-4 cursor-pointer group">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-600 rounded-xl md:rounded-2xl flex items-center justify-center font-display text-white text-xl md:text-2xl font-black group-hover:rotate-12 transition-transform shadow-xl shadow-brand-600/20">
                        M
                    </div>
                    <span className="font-display font-black text-base md:text-xl tracking-tighter uppercase dark:text-white text-slate-900">
                        marllon.drion.dev
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex gap-8 xl:gap-10 text-[10px] font-black uppercase tracking-[0.4em] dark:text-white/40 text-slate-900/40">
                    {navLinks.map(id => (
                        <a key={id} href={`#${id}`} className="hover:text-brand-500 dark:hover:text-brand-500 hover:opacity-100 transition-all py-2">
                            {getNavLabel(id)}
                        </a>
                    ))}
                </div>

                {/* Actions (Lang, Theme, Mobile Menu) */}
                <div className="flex items-center gap-4 md:gap-6 border-l dark:border-white/5 border-slate-200 pl-4 md:pl-8">
                    <button
                        onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
                        className="font-black text-[10px] uppercase hover:text-brand-500 tracking-[0.2em] transition-colors dark:text-white text-slate-900"
                    >
                        {lang === 'en' ? 'PT' : 'EN'}
                    </button>

                    <button
                        onClick={toggleTheme}
                        className="w-8 h-8 md:w-10 md:h-10 bg-slate-200 dark:bg-white/5 hover:bg-brand-600/10 rounded-lg md:rounded-xl flex items-center justify-center transition-all border border-transparent dark:border-white/5"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? '🌙' : '☀️'}
                    </button>

                    {/* Hamburger Menu Icon */}
                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5" aria-label="Menu">
                        <span className={`w-6 h-0.5 dark:bg-white bg-slate-900 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 dark:bg-white bg-slate-900 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 dark:bg-white bg-slate-900 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden absolute top-24 left-4 right-4 glass-card rounded-2xl p-6 transition-all duration-300 pointer-events-auto transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col gap-6 text-[10px] font-black uppercase tracking-[0.4em] dark:text-white text-slate-900">
                    {navLinks.map(id => (
                        <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)} className="hover:text-brand-500 block">
                            {getNavLabel(id)}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};