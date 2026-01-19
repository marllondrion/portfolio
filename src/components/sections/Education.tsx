import React from 'react';
import { RevealSection } from '../ui/RevealSection';

export const Education: React.FC<{ data: any }> = ({ data }) => (
    <RevealSection id="education">
        <div className="space-y-16 md:space-y-32">
            <h2 className="font-display text-6xl sm:text-8xl md:text-[100px] font-black tracking-tighter text-center leading-none opacity-10 text-slate-900 dark:text-white uppercase">
                ACADEMIA
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {data.items.map((item: any, i: number) => (
                    <div key={i} className="glass-card p-8 md:p-16 lg:p-20 rounded-[2.5rem] md:rounded-[4rem] group hover:border-brand-500/40 transition-all shadow-2xl flex flex-col justify-between h-full min-h-[350px] md:min-h-[450px]">
                        <div className="space-y-8">
                            <div className="w-16 h-16 md:w-24 md:h-24 bg-brand-600 rounded-2xl md:rounded-[2.5rem] flex items-center justify-center text-white text-3xl md:text-5xl font-black shadow-2xl shadow-brand-600/30 group-hover:scale-110 transition-transform">
                                {item.institution.charAt(0)}
                            </div>
                            <div className="space-y-4 md:space-y-6">
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight group-hover:text-brand-600 transition-colors text-slate-900 dark:text-white">
                                    {item.degree}
                                </h3>
                                <div className="dark:text-slate-400 text-slate-600 text-lg md:text-2xl font-bold">
                                    {item.institution}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-end border-t dark:border-white/10 border-slate-200 mt-12 pt-6 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] opacity-40 text-slate-900 dark:text-white">
                            <span>{item.period}</span>
                            <span>{item.location}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </RevealSection>
);