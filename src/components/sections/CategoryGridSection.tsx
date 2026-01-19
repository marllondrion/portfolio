import React, { useMemo } from 'react';
import { RevealSection } from '../ui/RevealSection';

interface Category {
    name: string;
    list: string[];
}

export const CategoryGridSection: React.FC<{ id: string, title: string, subtitle: string, categories: Category[] }> = ({ id, title, subtitle = '', categories }) => {

    // Memoizing the list prevents unnecessary re-renders during parent state changes
    const memoizedCategories = useMemo(() => categories, [categories]);

    return (
        <RevealSection id={id} innerClassName="max-w-none px-0">
            <div className="bg-slate-50 dark:bg-[#0a0f1a] md:rounded-[4rem] p-8 md:p-20 lg:p-24 relative overflow-hidden border-y dark:border-white/5 border-slate-200 mx-auto max-w-[1600px] contain-paint">

                {/* Optimized Background Glow: Hardware accelerated via transform */}
                <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-brand-500/10 blur-[120px] rounded-full pointer-events-none translate-z-0" />

                <div className="max-w-[1200px] mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter dark:text-white text-slate-900 leading-[0.9]">
                            {title.split(' ').map((word, i) => (
                                <span key={i} className={i === 1 ? "text-brand-500 block" : "block"}>{word}</span>
                            ))}
                        </h2>
                        <p className="dark:text-slate-400 text-slate-500 max-w-xs font-medium uppercase tracking-widest text-[10px]">
                            {subtitle}                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                        {memoizedCategories.map((cat, i) => (
                            <div
                                key={cat.name}
                                className="flex flex-col gap-8 group"
                                style={{ transitionDelay: `${i * 100}ms` }} // Staggered entrance feel
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="h-[2px] w-8 bg-brand-500" />
                                        <h4 className="dark:text-slate-200 text-slate-800 font-black uppercase text-[12px] tracking-[0.2em]">
                                            {cat.name}
                                        </h4>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {cat.list.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 text-sm font-bold rounded-lg
                                                       bg-white dark:bg-white/5 
                                                       border border-slate-200 dark:border-white/10
                                                       text-slate-700 dark:text-slate-300
                                                       hover:border-brand-500 hover:text-brand-500
                                                       transition-all duration-300 cursor-default
                                                       shadow-sm hover:shadow-brand-500/10 hover:-translate-y-1"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </RevealSection>
    );
};