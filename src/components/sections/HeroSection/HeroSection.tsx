import React from 'react';
import { RevealSection } from '../../ui/RevealSection';
import heroImage from '../../../assets/images/hero-image.png';
import styles from './HeroSection.module.css';

interface HeroProps {
    id?: string;
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
    visualTitle: string;
    visualMaskText: string;
}

export const HeroSection: React.FC<HeroProps> = ({
    id = "home",
    greeting,
    name,
    title,
    subtitle,
    ctaPrimary,
    ctaSecondary,
    visualTitle,
    visualMaskText
}) => {

    const renderMaskText = (text: string) => {
        const targetLength = 6000;
        if (!text) return "";
        let repeatedText = text;
        while (repeatedText.length < targetLength) {
            repeatedText += ` . ${text}`;
        }
        return repeatedText.substring(0, targetLength);
    };

    return (
        <RevealSection id={id}>
            <div className={styles.grid}>
                <div className={styles.contentArea}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        {greeting}
                    </div>

                    <h1 className={styles.nameTitle}>
                        {name} <br />
                        <span className="gradient-text">{title}</span>
                    </h1>

                    <p className={styles.description}>
                        {subtitle}
                    </p>

                    <div className={styles.ctaWrapper}>
                        <a href={ctaPrimary.href} className={styles.btnPrimary}>
                            {ctaPrimary.label}
                        </a>
                        <a href={ctaSecondary.href} className={styles.btnSecondary}>
                            {ctaSecondary.label}
                        </a>
                    </div>
                </div>

                <div className={styles.visualWrapper}>
                    <div className={styles.auraGlow}></div>
                    <div className={styles.maskContainer}>
                        <div className={styles.maskInner}>
                            <p className={styles.maskTitle}>{visualTitle}</p>
                            <div
                                className={styles.maskText}
                                style={{ backgroundImage: `url(${heroImage})` }}
                            >
                                {renderMaskText(visualMaskText)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealSection>
    );
};