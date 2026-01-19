import React from 'react';
import { RevealSection } from '../ui/RevealSection';

interface Link {
    label: string;
    href: string;
    type: 'email' | 'phone' | 'social' | string;
}

interface CallToActionProps {
    id?: string;
    title: string;
    subtitle: string;
    links?: Link[];
}

export const CallToActionSection: React.FC<CallToActionProps> = ({
    id = 'call-to-action',
    title,
    subtitle,
    links = []
}) => {
    const contactLinks = links.filter(link => link.type === "email" || link.type === "phone");
    const socialLinks = links.filter(link => link.type === "social");

    return (
        <RevealSection id={id} className="pb-10 pt-10 md:pt-20" isSnap={false}>
            <div className="text-center space-y-16 lg:space-y-32 max-w-5xl mx-auto">

                {/* Heading Area */}
                <div className="space-y-6">
                    <h2 className="font-display text-5xl sm:text-7xl md:text-[7vw] font-black leading-[0.85] tracking-tighter uppercase text-slate-900 dark:text-white">
                        {title} <br />
                        <span className="gradient-text">{subtitle}</span>
                    </h2>
                </div>

                {/* Interaction Area */}
                <div className="space-y-12 lg:space-y-20">

                    {/* Primary Contact (Email/Phone) */}
                    <div className="flex flex-col gap-4">
                        {contactLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-xl sm:text-2xl md:text-[1.5vw] font-display font-black dark:text-white text-slate-900 hover:text-brand-600 dark:hover:text-brand-500 transition-all block tracking-tighter leading-none break-all px-4"
                            >
                                {link.label || link.href.replace('mailto:', '').replace('tel:', '')}
                            </a>
                        ))}
                    </div>

                    {/* Secondary Socials */}
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 font-black text-[9px] md:text-[10px] tracking-[0.3em] uppercase opacity-40 px-6 text-slate-900 dark:text-white">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-100 hover:text-brand-600 transition-all"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </RevealSection>
    );
};