import { motion } from 'framer-motion';
import styles from './ExperienceSection.module.css';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Freelance',
      date: '2025 - Present',
      desc: 'Building custom web solutions for clients worldwide. Specialized in React, Next.js, and modern CSS architectures.',
      achievements: [
        'Delivered projects with 100% client satisfaction',
        'Reduced page load times by average of 40%',
        'Implemented responsive designs for 50+ components'
      ]
    },
    {
      title: 'Web Development Intern',
      company: 'Grade-A-Tutors.',
      date: '2025',
      desc: 'Contributed to responsive dashboard and component library development',
      achievements: [
        'Built reusable component library used across 3 products',
        'Improved mobile responsiveness by 60%',
        'Mentored 2 junior developers'
      ]
    },
    {
      title: 'Self-Taught Developer',
      company: 'Personal Projects',
      date: '2025',
      desc: 'Mastered React, modern CSS, and frontend best practices through intensive self-study',
      achievements: [
        'Completed 100+ hours of online courses',
        'Built 20+ personal projects',
        'Earned certifications in React and JavaScript'
      ]
    }
  ];

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                className={styles.timelineDot}
                whileHover={{ scale: 1.2 }}
              />
              
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.jobTitle}>{exp.title}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <span className={styles.date}>{exp.date}</span>
                </div>
                
                <p className={styles.description}>{exp.desc}</p>
                
                <ul className={styles.achievements}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className={styles.achievement}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;