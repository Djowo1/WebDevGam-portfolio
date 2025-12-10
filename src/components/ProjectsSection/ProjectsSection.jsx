import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './ProjectsSection.module.css';

const ProjectsSection = () => {
  const projects = [
    {
      id: 'ourverse-couple-app',
      title: 'OurVerse: The Ultimate Couple Platform',
      shortDesc: 'Connect, share, and celebrate your love online!',
      desc: 'OurVerse is a dynamic platform designed for couples to stay connected and make memories together. Built with React, and MongoDB.',
      tech: ['React', 'CSS Modules', 'MongoDB', 'Node.js', 'Socket.io'],
      image:'/portfolio-img/ourversecover.png',
      gradient: 'from-pink-400',
      featured: true
    },
    {
      id: 'surefit-gym',
      title: 'React Frontend Project For A Gym Website',
      shortDesc: 'Responsive gym frontend website',
      desc: 'Developed a responsive frontend website for a gym using React and CSS, allowing users to explore exercise routines, yoga, and muscle-building programs.',
      tech: ['React', 'CSS', 'JavaScript'],
      image: '/portfolio-img/gymcover.PNG',
      gradient: 'from-green-400',
      featured: false
    },
    {
      id: 'cinemanest',
      title: 'Cinemanest React Website',
      shortDesc: 'Movie discovery web app',
      desc: 'Built a responsive React-based movie web app with dynamic API data fetching, Firebase authentication, and real-time notifications.',
      tech: ['React', 'CSS', 'JavaScript', 'Firebase', 'Toastify'],
      image: '/portfolio-img/cinemanest S3.PNG',
      gradient: 'from-red-400',
      featured: false
    },
    {
      id: 'bitro-crypto',
      title: 'Bitro Cryptocurrency App',
      shortDesc: 'Crypto tracking platform',
      desc: 'Developed a responsive cryptocurrency web app integrated with the CoinGecko API, providing real-time coin information and market trends.',
      tech: ['React', 'CSS', 'JavaScript', 'CoinGecko API'],
      image: '/portfolio-img/bittrocover.png',
      gradient: 'from-yellow-400',
      featured: false
    },
    {
      id: 'cake-website',
      title: 'Frontend Project For A Cake Website',
      shortDesc: 'Interactive cake business website',
      desc: 'Created a responsive frontend for a cake business, featuring interactive galleries, add-to-cart functionality, and customizable options.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: '/portfolio-img/mycake1.PNG',
      gradient: 'from-pink-400',
      featured: false
    },
    {
      id: 'brew-coffee',
      title: 'Frontend Project For Brew & You Coffee Website',
      shortDesc: 'E-commerce coffee website',
      desc: 'Developed a responsive e-commerce platform for Brew & You Coffee, allowing users to explore and purchase specialty coffee blends online.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: '/portfolio-img/brew&youcover.PNG',
      gradient: 'from-yellow-300',
      featured: false
    },
    {
      id: 'paws-love',
      title: 'Frontend Project For Paws and Love Dog Adoption Website',
      shortDesc: 'Dog adoption platform',
      desc: 'Built a responsive dog adoption website, providing filtering, sorting, and an intuitive application process.',
      tech: ['HTML', 'TailwindCSS', 'JavaScript'],
      image: '/portfolio-img/paws&lovecover.PNG',
      gradient: 'from-blue-300',
      featured: false
    }
    // ,
    // {
    //   id: 'image-searcher',
    //   title: 'Image Searcher Project',
    //   shortDesc: 'API-integrated image search',
    //   desc: 'Developed a responsive website that allows users to search for images using an API with zoom features.',
    //   tech: ['HTML', 'CSS', 'JavaScript'],
    //   image: '🖼️',
    //   gradient: 'from-purple-400',
    //   featured: false
    // },
    // {
    //   id: 'coming-soon-gym',
    //   title: 'Coming Soon Website for Gym',
    //   shortDesc: 'Landing page with countdown',
    //   desc: 'Created a responsive coming soon page for a gym with engaging animations and countdown timer.',
    //   tech: ['HTML', 'CSS', 'JavaScript'],
    //   image: '⏳',
    //   gradient: 'from-green-300',
    //   featured: false
    // },
    // {
    //   id: 'music-app',
    //   title: 'Music App Project',
    //   shortDesc: 'Interactive music player',
    //   desc: 'Developed a music app that allows users to play, mix, and interact with songs with engaging UI.',
    //   tech: ['HTML', 'CSS', 'JavaScript'],
    //   image: '🎵',
    //   gradient: 'from-indigo-400',
    //   featured: false
    // }
  ];

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>Portfolio</span>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            Explore my latest work showcasing modern web technologies and creative problem-solving
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${styles.cardWrapper} ${project.featured ? styles.featured : ''}`}
            >
              <Link href={`/projects/${project.id}`}>
                <motion.div
                  className={styles.card}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.cardGlow}></div>
                  
                  <div className={styles.imageContainer}>
                    <div className={`${styles.imageGradient} ${styles[project.gradient]}`}>
                      {project.image.startsWith('/') ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className={styles.projectImage}
                        />
                      ) : (
                        <motion.div
                          className={styles.emoji}
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {project.image}
                        </motion.div>
                      )}
                    </div>
                    {project.featured && (
                      <span className={styles.featuredBadge}>Featured</span>
                    )}
                  </div>
                  
                  <div className={styles.content}>
                    <div className={styles.contentHeader}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <motion.div
                        className={styles.arrow}
                        whileHover={{ x: 5, y: -5 }}
                      >
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </motion.div>
                    </div>

                    <p className={styles.shortDesc}>{project.shortDesc}</p>
                    <p className={styles.description}>{project.desc}</p>
                    
                    <div className={styles.techStack}>
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span key={i} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className={styles.techMore}>+{project.tech.length - 3}</span>
                      )}
                    </div>
                    
                    <div className={styles.cardFooter}>
                      <span className={styles.viewProject}>
                        View Project (Live / Github)
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className={styles.cardShine}></div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.viewMore}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/Djowo1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;