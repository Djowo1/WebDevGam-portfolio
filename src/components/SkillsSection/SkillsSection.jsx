import { motion } from 'framer-motion';
import styles from './SkillsSection.module.css';

const SkillsSection = () => {
  const skills = [
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'Next.js', level: 90, category: 'Frontend' },
    { name: 'CSS Modules', level: 92, category: 'Styling' },
    { name: 'JavaScript', level: 90, category: 'Language' },
    { name: 'HTML/CSS', level: 98, category: 'Fundamentals' },
    { name: 'Git & GitHub', level: 88, category: 'Tools' },
    { name: 'Responsive Design', level: 95, category: 'Design' },
    { name: 'API Integration', level: 87, category: 'Backend' },
     { name: 'Tailwindcss', level: 90, category: 'Framework' },
    { name: 'SaaS', level: 73, category: 'Framework' }
  ];

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.skillName}>{skill.name}</h3>
                <span className={styles.category}>{skill.category}</span>
              </div>
              
              <div className={styles.progressBar}>
                <motion.div
                  className={styles.progressFill}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                />
              </div>
              
              <p className={styles.percentage}>{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;