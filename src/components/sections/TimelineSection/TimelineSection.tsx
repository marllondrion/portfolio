import React from 'react';
import { RevealSection } from '../../ui/RevealSection';
import { IconExternal } from '../../ui/IconExternal';
import styles from './TimelineSection.module.css';

interface TimelineItem {
    title: string;
    subtitle: string;
    description?: string;
    link?: string;
    tagLeft?: string;
    tagRight?: string;
    bullets: string[];
    tags: string[];
}

export const TimelineSection: React.FC<{ id: string, title: string, subtitle: string, items: TimelineItem[] }> = ({ id, title, subtitle, items }) => (
    <RevealSection id={id} className={styles.section}>
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <div className={styles.grid}>
                {items.map((item, i) => (
                    <div key={i} className={styles.card}>
                        {/* LEFT SIDE ON DESKTOP */}
                        <div className={styles.contentWrapper}>
                            <div className={styles.titleGroup}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                {item.link && (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
                                        {item.subtitle} <IconExternal />
                                    </a>
                                )}
                            </div>

                            <div className={styles.infoRow}>
                                <span>{item.tagLeft}</span>
                                <span>{item.tagRight}</span>
                            </div>

                            <div className={styles.description}>
                                {item.description}
                            </div>

                            {/* Tags for Desktop - Stays in the left column */}
                            <div className={styles.footerDesktop}>
                                <div className={styles.tagsList}>
                                    {item.tags.map((tag) => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE ON DESKTOP (Bullets) */}
                        <div className={styles.rightCol}>
                            <ul className={styles.bulletList}>
                                {item.bullets.map((b, idx) => (
                                    <li key={idx} className={styles.bulletItem}>
                                        <span className={styles.bulletPoint}>/</span>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* TAGS ONLY FOR MOBILE (Bottom of card) */}
                        <div className={styles.footerMobile}>
                            <div className={styles.tagsList}>
                                {item.tags.map((tag) => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </RevealSection>
);