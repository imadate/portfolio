import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Companies from './components/Companies/Companies';
import Certifications from './components/Certifications/Certifications';
import Hobbies from './components/Hobbies/Hobbies';
import Contact from './components/Contact/Contact';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import { trackPageView, trackThemeChange, trackTimeOnPage } from './utils/analytics';

function App() {
  // Initialize darkMode from localStorage, default to false (light mode)
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Track initial page view
  useEffect(() => {
    trackPageView(window.location.pathname, document.title);

    // Track time on page
    const startTime = Date.now();
    const handleBeforeUnload = () => {
      const timeSpent = Date.now() - startTime;
      trackTimeOnPage(timeSpent);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('light-mode', !darkMode);
    // Save theme preference to localStorage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    // Track theme changes
    trackThemeChange(darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <ParticlesBackground darkMode={darkMode} />
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Companies />
        <Certifications />
        <Hobbies />
        <Contact />
      </main>
    </div>
  );
}

export default App;
