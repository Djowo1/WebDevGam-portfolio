import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import projectsData from '../../data/projectsData';
import styles from '../../styles/ProjectDetail.module.css';

export default function ProjectDetail({ theme, toggleTheme }) {
  const router = useRouter();
  const { id } = router.query;
  const project = projectsData[id];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Going Back To Homepage</h1>
        <Link href="/">
          <div className={styles.backButton}>Go Home</div>
        </Link>
      </div>
    );
  }

  const nextImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <Head>
        <title>{project.title} - Portfolio</title>
        <meta name="description" content={project.description} />
      </Head>

      <div className={styles.page}>
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link href="/#projects">
            <motion.div
              className={styles.backLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </motion.div>
          </Link>

          <motion.div
            className={styles.heroContent}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className={styles.tag}>{project.year}</span>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.tagline}>{project.tagline}</p>
            
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <strong>Role:</strong> {project.role}
              </div>
              <div className={styles.metaItem}>
                <strong>Duration:</strong> {project.duration}
              </div>
            </div>

            <div className={styles.actions}>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.liveButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </motion.a>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Code
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <div className={styles.container}>
          {project.images && project.images.length > 0 && (
            <section className={styles.gallery}>
              <div className={styles.mainImage}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className={styles.imageWrapper}
                  >
                    <img 
                      src={project.images[currentImageIndex]} 
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      className={styles.projectImage}
                    />
                  </motion.div>
                </AnimatePresence>

                {project.images.length > 1 && (
                  <>
                    <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevImage}>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextImage}>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <div className={styles.imageIndicators}>
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          className={`${styles.indicator} ${index === currentImageIndex ? styles.activeIndicator : ''}`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {project.images.length > 1 && (
                <div className={styles.thumbnails}>
                  {project.images.map((img, index) => (
                    <motion.button
                      key={index}
                      className={`${styles.thumbnail} ${index === currentImageIndex ? styles.activeThumbnail : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img src={img} alt={`Thumbnail ${index + 1}`} />
                      <div className={styles.thumbnailNumber}>{index + 1}</div>
                    </motion.button>
                  ))}
                </div>
              )}
            </section>
          )}

          {project.video && (
            <section className={styles.videoSection}>
              <h2>Project Demo</h2>
              <div className={styles.videoContainer}>
                {!showVideo ? (
                  <motion.button
                    className={styles.videoPlaceholder}
                    onClick={() => setShowVideo(true)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <svg className={styles.playIcon} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>Watch Demo Video</span>
                  </motion.button>
                ) : (
                  <video controls autoPlay className={styles.video}>
                    <source src={project.video} type="video/mp4" />
                  </video>
                )}
              </div>
            </section>
          )}

          <section className={styles.overview}>
            <h2>Project Overview</h2>
            <p className={styles.description}>{project.longDescription}</p>
          </section>

          <section className={styles.techStack}>
            <h2>Technologies Used</h2>
            <div className={styles.techGrid}>
              {project.tech.map((tech, index) => (
                <motion.div
                  key={index}
                  className={styles.techItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </section>

          <section className={styles.features}>
            <h2>Key Features</h2>
            <div className={styles.featureGrid}>
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={styles.featureItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <svg className={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </motion.div>
              ))}
            </div>
          </section>

          <section className={styles.challenges}>
            <h2>Challenges & Solutions</h2>
            {project.challenges.map((item, index) => (
              <motion.div
                key={index}
                className={styles.challengeItem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={styles.challengeProblem}>
                  <h4>Challenge</h4>
                  <p>{item.problem}</p>
                </div>
                <div className={styles.challengeSolution}>
                  <h4>Solution</h4>
                  <p>{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </section>

          <section className={styles.cta}>
            <h2>Interested in this project?</h2>
            <p>Check out the live demo or view the source code on GitHub</p>
            <div className={styles.ctaButtons}>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimary}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Live Site
              </motion.a>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaSecondary}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View on GitHub
              </motion.a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}