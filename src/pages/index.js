import { useState, useEffect } from 'react';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';

import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import ScrollProgress from '../components/ScrollProgress/ScrollProgress';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';
import Navigation from '../components/Navigation/Navigation';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSection from '../components/AboutSection/AboutSection';
import SkillsSection from '../components/SkillsSection/SkillsSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection/ExperienceSection';
import ContactSection from '../components/ContactSection/ContactSection';

export default function Home({ theme, toggleTheme, loading, setLoading }) {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Ayodeji - Frontend Web Developer</title>
        <meta name="description" content="Portfolio of Ayodeji, a Frontend Web Developer specializing in React, Next.js, and modern web technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <Navigation activeSection={activeSection} />
          
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
          </main>

          <footer style={{
            padding: '2rem',
            textAlign: 'center',
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border-color)'
          }}>
            <p style={{ color: 'var(--text-secondary)' }}>
              © 2024 Ayodeji. Built with Next.js, Framer Motion & Three.js
            </p>
          </footer>
        </>
      )}
    </>
  );
}