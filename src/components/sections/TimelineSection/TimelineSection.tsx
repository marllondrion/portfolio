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
                        <div className={styles.leftCol}>

                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.externalLink}
                                >
                                    {item.subtitle} <IconExternal />
                                </a>
                            )}

                            <div className={styles.infoRow}>
                                <span>{item.tagLeft}</span>
                                <span>{item.tagRight}</span>
                            </div>
                            <div className={styles.description}>
                                {item.description}
                            </div>

                            <div className={styles.footer} >
                                <div className={styles.tagsList}>
                                    {item.tags.map((tag) => (
                                        <span key={tag} className={styles.tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
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
                    </div>
                ))}
            </div>
        </div>
    </RevealSection>
);