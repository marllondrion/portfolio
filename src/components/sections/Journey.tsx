import React from 'react';
import { RevealSection } from '../ui/RevealSection';
import { IconExternal } from '../ui/IconExternal';

export const Journey: React.FC<{ data: any }> = ({ data }) => (
    <RevealSection id="journey" className="py-20 md:py-32">
        <div className="space-y-12 md:space-y-24">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
                <h2 className="font-display text-6xl sm:text-8xl md:text-[100px] lg:text-[120px] font-black tracking-tighter leading-none opacity-10 text-slate-900 dark:text-white uppercase">{data.title}</h2>
                <p className="font-black text-brand-500 uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] pb-4">{data.subtitle}</p>
            </div>
            <div className="grid gap-12">
                {data.items.map((item: any, i: number) => (
                    <div key={i} className="glass-card p-6 md:p-12 lg:p-16 rounded-3xl md:rounded-[4rem] group hover:border-brand-500/50 transition-all duration-700 shadow-2xl relative overflow-hidden flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16">
                        {/* Content similar to original, but now isolated */}
                        <div className="lg:col-span-4 space-y-4 md:space-y-6">
                            <h3 className="text-3xl md:text-5xl font-black tracking-tighter group-hover:text-brand-600 transition-colors leading-none text-slate-900 dark:text-white">{item.role}</h3>
                            <a href={item.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-brand-600 font-black text-lg md:text-xl tracking-tight hover:underline">
                                {item.company} <IconExternal />
                            </a>
                            <div className="flex justify-between items-end dark:border-white/10 border-slate-200 mt-12 pt-6 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] opacity-40 text-slate-900 dark:text-white">
                                <span>{item.period}</span>
                                <span>{item.location}</span>
                            </div>
                        </div>
                        <div className="lg:col-span-8 space-y-6 md:space-y-10">
                            <ul className="space-y-4 md:space-y-6 text-base md:text-xl dark:text-slate-400 text-slate-600 font-medium">
                                {item.bullets.map((b: string, idx: number) => (
                                    <li key={idx} className="flex gap-4 md:gap-6"><span className="text-brand-600 font-black">/</span> {b}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </RevealSection>
);