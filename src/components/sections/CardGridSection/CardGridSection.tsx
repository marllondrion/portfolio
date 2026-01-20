import React from 'react';
import { RevealSection } from '../../ui/RevealSection';
import styles from './CardGridSection.module.css';

interface GridItem {
    title: string;
    subtitle: string;
    tagLeft?: string;
    tagRight?: string;
    iconText?: string;
}

interface CardGridSectionProps {
    id: string;
    bgTitle: string;
    items: GridItem[];
}

export const CardGridSection: React.FC<CardGridSectionProps> = ({ id, bgTitle, items }) => (
    <RevealSection id={id}>
        <div className={styles.container}>
            <h2 className={styles.backgroundTitle}>{bgTitle}</h2>
            <div className={styles.grid}>
                {items.map((item, i) => (
                    <div
                        key={i}
                        className={styles.card}
                        style={{ '--index': i } as React.CSSProperties}
                    >
                        <div className={styles.contentWrapper}>
                            <div className={styles.iconBox}>
                                {item.iconText || item.title.charAt(0)}
                            </div>
                            <div className={styles.textGroup}>
                                <h3 className={styles.cardTitle}>
                                    {item.title}
                                </h3>
                                <div className={styles.subtitle}>
                                    {item.subtitle}
                                </div>
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <span>{item.tagLeft}</span>
                            <span>{item.tagRight}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </RevealSection>
);