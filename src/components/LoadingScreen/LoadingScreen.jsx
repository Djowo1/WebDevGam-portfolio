/*
  LOADING SCREEN COMPONENT
  
  This shows a beautiful loading animation when the site first loads.
  It creates a premium first impression.
  
  How it works:
  1. Shows your initials (AO) with animation
  2. Progress bar fills from 0 to 100%
  3. When complete, calls onComplete() to hide itself
  4. Uses Framer Motion for smooth animations
*/

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './LoadingScreen.module.css';

const LoadingScreen = ({ onComplete }) => {
  // Track loading progress (0 to 100)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // setInterval runs code repeatedly at specified intervals
    const timer = setInterval(() => {
      setProgress(prev => {
        // If we've reached 100%, stop and call onComplete
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400); // Wait 500ms before hiding
          return 100;
        }
        // Otherwise, increase by 2
        return prev + 2;
      });
    }, 20); // Run every 20 milliseconds

    // Cleanup function - stops the timer when component unmounts
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 1 }} // Start visible
      exit={{ opacity: 0 }}     // Fade out when removed
      transition={{ duration: 0.5 }}
    >
      <div className={styles.content}>
        {/* Animated initials */}
        <motion.div
          className={styles.logo}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          W.D.G
        </motion.div>

        {/* Progress bar container */}
        <div className={styles.progressBar}>
          {/* The filling bar */}
          <motion.div
            className={styles.progressFill}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Progress percentage text */}
        <p className={styles.progressText}>{progress}%</p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;