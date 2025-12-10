import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const highlights = [
    { 
      icon: '🎨', 
      title: 'Pixel-Perfect UI', 
      desc: 'Meticulous attention to every design detail',
      color: '#6366f1'
    },
    { 
      icon: '📱', 
      title: 'Responsive Design', 
      desc: 'Flawless experience across all devices',
      color: '#8b5cf6'
    },
    { 
      icon: '✨', 
      title: 'Smooth Animations', 
      desc: 'Delightful micro-interactions',
      color: '#a855f7'
    },
    { 
      icon: '🔌', 
      title: 'API Integration', 
      desc: 'Seamless backend connectivity',
      color: '#ec4899'
    },
    { 
      icon: '⚡', 
      title: 'Performance', 
      desc: 'Lightning-fast load times',
      color: '#f59e0b'
    },
    { 
      icon: '♿', 
      title: 'Accessibility', 
      desc: 'Inclusive design for everyone',
      color: '#10b981'
    }
  ];

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>About Me</span>
          <h2 className={styles.title}>
            Turning Ideas Into
            <br />
            <span className={styles.gradient}>Digital Reality</span>
          </h2>
        </motion.div>

        <div className={styles.mainContent}>
          <motion.div
            className={styles.videoSection}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.videoWrapper}>
              <div className={styles.videoContainer}>
                {!videoError ? (
                  <>
                    <video
                      ref={videoRef}
                      className={styles.video}
                      onEnded={() => setIsPlaying(false)}
                      onError={handleVideoError}
                      poster="/portfolio-img/video-poster.jpg"
                    >
                      <source src="/portfolio-img/about-me.mp4" type="video/mp4" />
                    </video>
                    
                    {!isPlaying && (
                      <motion.button
                        className={styles.playButton}
                        onClick={toggleVideo}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: 'spring' }}
                      >
                        <div className={styles.playIcon}>
                          <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <span className={styles.playText}> A brief me outside coding!!</span>
                      </motion.button>
                    )}
                  </>
                ) : (
                  <div className={styles.videoPlaceholder}>
                    <div className={styles.placeholderIcon}>🎥</div>
                    <p>Video coming soon!</p>
                  </div>
                )}
              </div>
              
              <div className={styles.videoDecoration}>
                <div className={styles.decorCircle1}></div>
                <div className={styles.decorCircle2}></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={styles.subtitle}>Hi there! 👋</h3>
            <p className={styles.paragraph}>
              I'm a <strong>frontend developer</strong> who believes that great design 
              and clean code go hand in hand. I specialize in building modern, responsive web 
              applications using <span className={styles.highlight}>React</span>, <span className={styles.highlight}>Next.js</span>, <span className={styles.highlight}>Tailwindcss</span>, <span className={styles.highlight}>JavaScript</span>, 
              and the latest web technologies.
            </p>
            <p className={styles.paragraph}>
              With a keen eye for detail and a commitment to excellence, I transform complex 
              problems into simple, elegant solutions. Whether it's crafting pixel-perfect 
              interfaces or optimizing performance, I'm dedicated to delivering exceptional 
              user experiences.
            </p>

            <div className={styles.stats}>
              {/* <div className={styles.statItem}>
                <span className={styles.statNumber}>1+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div> */}
              <div className={styles.statItem}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <motion.a
                href="#contact"
                className={styles.primaryCta}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
              <motion.a
                href="/Ayodeji Cv Resume.pdf"
                target="_blank"
                className={styles.secondaryCta}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className={styles.highlightsSection}>
          <motion.h3
            className={styles.highlightsTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What I Bring to the Table
          </motion.h3>
          
          <div className={styles.highlightsGrid}>
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                style={{ '--card-color': item.color }}
              >
                <div className={styles.cardGlow}></div>
                <div className={styles.icon}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                <div className={styles.cardShine}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;