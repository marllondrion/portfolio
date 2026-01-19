import React from 'react';
import { RevealSection } from '../ui/RevealSection';

export const Contact: React.FC<{ data: any }> = ({ data }) => {
    const titleParts = data.title.split(' ');
    const firstPart = titleParts.slice(0, 2).join(' ');
    const secondPart = titleParts.slice(2).join(' ');

    return (
        <RevealSection id="contact" className="pb-10 pt-10 md:pt-20" isSnap={false}>
            <div className="text-center space-y-16 lg:space-y-32 max-w-5xl mx-auto">
                <div className="space-y-6">
                    <h2 className="font-display text-5xl sm:text-7xl md:text-[7vw] font-black leading-[0.85] tracking-tighter uppercase text-slate-900 dark:text-white">
                        {firstPart} <br />
                        <span className="gradient-text">{secondPart}</span>
                    </h2>
                </div>

                <div className="space-y-2 lg:space-y-20">
                    <a href={`mailto:${data.email}`} className="text-xl sm:text-1xl md:text-[3.5vw] font-display font-black dark:text-white text-slate-900 hover:text-brand-600 dark:hover:text-brand-500 transition-all block tracking-tighter leading-none break-all px-4">
                        {data.email}
                    </a>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 font-black text-[9px] md:text-[10px] tracking-[0.3em] uppercase opacity-40 px-6 text-slate-900 dark:text-white">
                        <span className="cursor-default">{data.phone}</span>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-brand-600 transition-all">LINKEDIN</a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:text-brand-600 transition-all">GITHUB</a>
                    </div>
                </div>
            </div>
        </RevealSection>
    );
};