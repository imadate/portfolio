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

function App() {
  // Initialize darkMode from localStorage, default to false (light mode)
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('light-mode', !darkMode);
    // Save theme preference to localStorage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
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
