
import React, { createContext, useContext, useState, useLayoutEffect } from 'react';
import { content } from './data';

type Language = 'en' | 'pt';
type Theme = 'light' | 'dark';

interface AppContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    theme: Theme;
    toggleTheme: () => void;
    data: any;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Language>('en');
    const [theme, setTheme] = useState<Theme>('dark');

    // Apply theme class to document element immediately
    useLayoutEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    const data = content[lang];

    return (
        <AppContext.Provider value={{ lang, setLang, theme, toggleTheme, data }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};
