import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Navigation.module.css';


const Navigation = ({ activeSection }) => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // All sections of the website
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      className={styles.nav}
      initial={{ y: -100 }}  
      animate={{ y: 0 }}   
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
       
        <motion.div
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
        >
          W.D.G
        </motion.div>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {sections.map(section => (
            <motion.a
              key={section.id}
              href={`#${section.id}`}
              className={`${styles.link} ${
                activeSection === section.id ? styles.active : ''
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            // X icon to close
            <svg className={styles.menuIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon to open
            <svg className={styles.menuIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          className={styles.mobileMenu}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {sections.map(section => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`${styles.mobileLink} ${
                activeSection === section.id ? styles.mobileActive : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {section.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;