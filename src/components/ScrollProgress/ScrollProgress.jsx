import { motion, useScroll } from 'framer-motion';
import styles from './ScrollProgress.module.css';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={styles.bar}
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;