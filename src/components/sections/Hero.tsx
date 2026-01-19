import React from 'react';
import { RevealSection } from '../ui/RevealSection';

interface HeroData {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
    bg_image_title: string;
    bg_image_text: string;
    bg_image_path: string;
}

interface HeroProps {
    data: HeroData;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {

    /**
     * Fills the container by repeating text up to 6000 chars.
     */
    const renderMaskText = (text: string) => {
        const targetLength = 6000;
        if (text.length >= targetLength) {
            return text.substring(0, targetLength);
        }

        let repeatedText = text;
        while (repeatedText.length < targetLength) {
            repeatedText += ` . ${text}`;
        }
        return repeatedText.substring(0, targetLength);
    };

    return (
        <RevealSection id="home">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Text Content */}
                <div className="space-y-10 md:space-y-12 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 md:px-6 md:py-2 bg-brand-600/10 border border-brand-600/20 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-brand-500">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-500 rounded-full animate-ping"></span>
                        {data.greeting}
                    </div>

                    <h1 className="font-display text-5xl sm:text-7xl md:text-8xl xl:text-[95px] font-black leading-[0.9] tracking-tight text-slate-900 dark:text-white">
                        {data.name} <br />
                        <span className="gradient-text">{data.title}</span>
                    </h1>

                    <p className="text-lg md:text-2xl dark:text-slate-400 text-slate-600 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                        {data.subtitle}
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
                        <a href="#journey" className="bg-brand-600 text-white px-8 py-4 md:px-12 md:py-6 rounded-2xl md:rounded-[2rem] font-black text-base md:text-lg shadow-2xl shadow-brand-600/40 hover:scale-105 active:scale-95 transition-all">
                            {data.cta_primary}
                        </a>
                        <a href="#contact" className="px-8 py-4 md:px-12 md:py-6 rounded-2xl md:rounded-[2rem] font-black text-base md:text-lg border-2 dark:border-white/10 border-slate-200 dark:text-white text-slate-900 hover:bg-slate-200 dark:hover:bg-white/5 transition-all">
                            {data.cta_secondary}
                        </a>
                    </div>
                </div>

                {/* Skill Cloud Image Mask */}
                <div className="flex justify-center lg:justify-end relative group mt-10 lg:mt-0">
                    <div className="absolute inset-0 bg-brand-600/10 md:bg-brand-600/20 blur-[100px] md:blur-[180px] rounded-full group-hover:bg-brand-600/30 transition-all duration-1000"></div>

                    <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] xl:w-[550px] xl:h-[550px] 
                                    rounded-[3rem] md:rounded-[6rem] border-8 md:border-[16px] dark:border-white/10 border-white 
                                    overflow-hidden shadow-2xl lg:rotate-2 group-hover:rotate-0 transition-all duration-1000 
                                    bg-slate-900 flex items-center justify-center">

                        <div className="relative w-full h-full p-4 md:p-8 flex flex-col justify-center overflow-hidden">
                            <p className="mb-4 text-xs md:text-sm font-black uppercase tracking-widest text-slate-500/50 self-center">
                                {data.bg_image_title}
                            </p>

                            {/* The "Mask" Div */}
                            <div
                                className="font-mono text-[7px] md:text-[9px] leading-[8px] md:leading-[10px] font-black tracking-tighter
                                          bg-cover bg-center bg-no-repeat 
                                          bg-clip-text text-transparent [-webkit-background-clip:text] 
                                          grayscale group-hover:grayscale-0 transition-all duration-700 
                                          select-none h-full w-full text-justify break-all"
                                style={{ backgroundImage: `url(${data.bg_image_path})` }}>
                                {renderMaskText(data.bg_image_text)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealSection>
    );
};