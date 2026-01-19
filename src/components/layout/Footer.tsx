import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="pt-20 pb-10 text-center opacity-20 font-black text-[8px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[1em] dark:text-white text-slate-900">
            MARLLON DRION &bull; EXCELLENCE BY SOFTWARE DESIGN &bull; {new Date().getFullYear()}
        </footer>
    );
};