/*
  _APP.JS - The Root Component of Your Next.js App
  
  This file wraps EVERY page in your application.
  It's like the "master container" that runs before any page loads.
  
  Key Responsibilities:
  1. Manages the theme (light/dark mode)
  2. Loads global styles
  3. Persists state across page changes
  4. Provides props to all pages
*/

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  // State to track current theme (light or dark)
  const [theme, setTheme] = useState('light');
  
  // State to track loading screen
  const [loading, setLoading] = useState(true);

  // Run once when app loads
  useEffect(() => {
    // Check if we're in the browser (not server-side rendering)
    if (typeof window !== 'undefined') {
      // Get saved theme from localStorage (or default to 'light')
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      
      // Apply theme to the HTML document
      document.documentElement.setAttribute('data-theme', savedTheme);
      
      // Hide loading screen after 2 seconds
      setTimeout(() => setLoading(false), 2000);
    }
  }, []); // Empty array means run once on mount

  // Function to toggle between light and dark theme
  const toggleTheme = () => {
    // Switch theme
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Save to localStorage so it persists between visits
    localStorage.setItem('theme', newTheme);
    
    // Update the HTML data attribute for CSS
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <>
      {/* 
        AnimatePresence: Allows exit animations for components 
        mode="wait": Wait for exit animation before showing new component
      */}
      <AnimatePresence mode="wait">
        {/* 
          Component: The current page being rendered
          We pass these props to ALL pages:
          - theme: current theme ('light' or 'dark')
          - toggleTheme: function to switch theme
          - loading: is loading screen showing?
          - setLoading: function to hide loading screen
          - pageProps: any props the page needs
        */}
        <Component 
          {...pageProps} 
          theme={theme}
          toggleTheme={toggleTheme}
          loading={loading}
          setLoading={setLoading}
          key={router.route} 
        />
      </AnimatePresence>
    </>
  );
}

export default MyApp;