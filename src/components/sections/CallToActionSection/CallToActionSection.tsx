import React from 'react';
import { RevealSection } from '../../ui/RevealSection';
import styles from './CallToActionSection.module.css';

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
    const primaryLinks = links.filter(link => link.type === "email" || link.type === "phone");
    const socialLinks = links.filter(link => link.type === "social");

    return (
        <RevealSection id={id} className={styles.section} isSnap={false}>
            <div className={styles.container}>

                {/* Heading Area */}
                <div className={styles.headingWrapper}>
                    <h2 className={styles.title}>
                        {title} <br />
                        <span className={styles.highlight}>{subtitle}</span>
                    </h2>
                </div>

                {/* Interaction Area */}
                <div className={styles.interactionWrapper}>

                    <div className={styles.primaryGroup}>
                        {primaryLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className={styles.primaryLink}
                            >
                                {link.label || link.href.replace('mailto:', '').replace('tel:', '')}
                            </a>
                        ))}
                    </div>

                    {/* Secondary links */}
                    <div className={styles.secondaryGroup}>
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.secondaryLink}
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