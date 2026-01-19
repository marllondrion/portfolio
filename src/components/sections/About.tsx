import React from 'react';
import { RevealSection } from '../ui/RevealSection';

interface AboutProps {
    data: {
        title: string;
        description: string;
        achievements: string;
        achievements_list: string[];
        objectives: string;
        objectives_list: string[];
    };
}

export const About: React.FC<AboutProps> = ({ data }) => (
    <RevealSection id="about">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            <div className="space-y-8 md:space-y-12">
                <div className="space-y-4">
                    <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tighter leading-none dark:text-white text-slate-900">
                        {data.title}
                    </h2>
                    <div className="w-16 md:w-24 h-1 md:h-2 bg-brand-600 rounded-full"></div>
                </div>
                <p className="text-xl md:text-2xl leading-relaxed dark:text-slate-400 text-slate-600 font-medium">
                    {data.description}
                </p>

                <div className="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl">
                    <h4 className="font-black text-brand-500 uppercase text-[10px] tracking-[0.4em] mb-6 md:mb-10 flex items-center gap-4">
                        <span className="w-8 md:w-12 h-[2px] bg-brand-500"></span>
                        {data.achievements}
                    </h4>
                    <div className="grid gap-4">
                        {data.achievements_list.map((item, i) => (
                            <div key={i} className="flex gap-4 items-start p-4 bg-slate-200/50 dark:bg-white/[0.03] rounded-2xl border dark:border-white/5 border-slate-200">
                                <span className="w-6 h-6 rounded-lg bg-brand-600 text-white flex items-center justify-center shrink-0 font-black text-[10px]">
                                    0{i + 1}
                                </span>
                                <span className="text-sm md:text-lg font-bold opacity-80">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid gap-6 md:gap-8 lg:mt-16">
                <h4 className="font-black text-brand-500 uppercase text-[10px] tracking-[0.4em] lg:text-right lg:pr-12">
                    {data.objectives}
                </h4>
                {data.objectives_list.map((item, i) => (
                    <div key={i} className="p-6 md:p-10 bg-slate-200/50 dark:bg-white/[0.04] rounded-2xl md:rounded-[3rem] border dark:border-white/5 border-slate-200 hover:border-brand-500 transition-all group shadow-lg">
                        <p className="font-black text-lg md:text-2xl group-hover:text-brand-500 transition-colors leading-tight text-slate-900 dark:text-white">
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </RevealSection>
);