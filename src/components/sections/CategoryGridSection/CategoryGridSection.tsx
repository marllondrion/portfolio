import React, { useMemo } from 'react';
import { RevealSection } from '../../ui/RevealSection';
import styles from './CategoryGridSection.module.css';

interface Category {
    name: string;
    list: string[];
}

export const CategoryGridSection: React.FC<{ id: string, title: string, subtitle: string, categories: Category[] }> = ({ id, title, subtitle = '', categories }) => {
    const memoizedCategories = useMemo(() => categories, [categories]);

    return (
        <RevealSection id={id} innerClassName="max-w-none px-0">
            <div className={styles.sectionWrapper}>
                <div className={styles.bgGlow} />

                <div className={styles.contentContainer}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>
                            {title.split(' ').map((word, i) => (
                                <span
                                    key={i}
                                    className={i === 1 ? styles.titleHighlight : styles.titleWord}
                                >
                                    {word}
                                </span>
                            ))}
                        </h2>
                        <p className={styles.subtitle}>{subtitle}</p>
                    </div>

                    <div className={styles.grid}>
                        {memoizedCategories.map((cat, i) => (
                            <div
                                key={cat.name}
                                className={styles.categoryGroup}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className={styles.categoryHeader}>
                                    <span className={styles.categoryAccent} />
                                    <h4 className={styles.categoryName}>{cat.name}</h4>
                                </div>

                                <div className={styles.skillList}>
                                    {cat.list.map((skill) => (
                                        <span key={skill} className={styles.skillTag}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </RevealSection>
    );
};