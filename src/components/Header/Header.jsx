import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes, FaRocket } from 'react-icons/fa';
import './Header.css';

const Header = ({ darkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero', isRoute: false },
    { name: 'About', href: '#about', isRoute: false },
    { name: 'Skills', href: '#skills', isRoute: false },
    { name: 'Experience', href: '#experience', isRoute: false },
    // { name: 'Experiments', href: '/experiments', isRoute: true, icon: <FaRocket /> },
    { name: 'Hobbies', href: '#hobbies', isRoute: false },
    { name: 'Contact', href: '#contact', isRoute: false },
  ];

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/">
            <span className="logo-text gradient-text">Akshay Namdeo Adate</span>
            <span className="logo-subtitle">AI Engineer</span>
          </Link>
        </motion.div>

        <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item, index) => {
            const content = (
              <>
                {item.icon && <span className="nav-icon">{item.icon}</span>}
                {item.name}
              </>
            );

            if (item.isRoute) {
              return (
                <motion.div
                  key={item.name}
                  className="nav-link"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link 
                    to={item.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className={location.pathname === item.href ? 'active' : ''}
                  >
                    {content}
                  </Link>
                </motion.div>
              );
            }

            return (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-link"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {content}
              </motion.a>
            );
          })}
        </nav>

        <div className="header-actions">
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </motion.button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
