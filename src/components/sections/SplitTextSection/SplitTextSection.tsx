import React from 'react';
import { RevealSection } from '../../ui/RevealSection';
import styles from './SplitTextSection.module.css';

interface SplitTextSectionProps {
    id: string;
    title: string;
    description: string;
    leftListTitle?: string;
    leftList: string[];
    rightListTitle?: string;
    rightList: string[];
}

export const SplitTextSection: React.FC<SplitTextSectionProps> = ({
    id, title, description, leftListTitle, leftList, rightListTitle, rightList
}) => (
    <RevealSection id={id}>
        <div className={styles.gridContainer}>
            <div className={styles.contentCol}>
                <div className={styles.titleArea}>
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.accentBar}></div>
                </div>
                <p className={styles.description}>{description}</p>

                {leftList.length > 0 && (
                    <div className={styles.leftCard}>
                        {leftListTitle && (
                            <h4 className={styles.listTitle}>
                                <span className={styles.listTitleBar}></span>
                                {leftListTitle}
                            </h4>
                        )}
                        <div className={styles.leftCardList}>
                            {leftList.map((item, i) => (
                                <div key={i} className={styles.listItem}>
                                    <span className={styles.listIndex}>
                                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
                                    </span>
                                    <span className={styles.leftCardText}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className={styles.rightCol}>
                {rightListTitle && (
                    <h4 className={styles.rightListTitle}>
                        {rightListTitle}
                    </h4>
                )}
                {rightList.map((item, i) => (
                    <div key={i} className={styles.rightCard}>
                        <p className={styles.rightCardText}>
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </RevealSection>
);