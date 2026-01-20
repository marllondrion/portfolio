import React from 'react';
import styles from './Footer.module.css';

/**
 * Footer Component
 */
export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footerContainer}>
            MARLLON DRION &bull; EXCELLENCE BY SOFTWARE DESIGN &bull; {currentYear}
        </footer>
    );
};