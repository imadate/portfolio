import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaYoutube } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const downloadResume = () => {
    // Create resume download link
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume PDF
    link.download = 'Akshay_Adate_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-greeting"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="wave">👋</span> Hi, I'm
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Akshay Namdeo Adate
          </motion.h1>

          <div className="hero-title">
            <TypeAnimation
              sequence={[
                'Senior AI Engineer',
                2000,
                'Full-stack Developer',
                2000,
                'GenAI Specialist',
                2000,
                'Cloud Architect',
                2000,
                'Tech Enthusiast',
                2000,
                'Content Creator',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="gradient-text"
            />
          </div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Building scalable, cloud-native AI applications with 5+ years of expertise in
            Node.js, React, Python, and AWS. Passionate about Generative AI, conversational
            systems, and creating impactful solutions.
          </motion.p>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="stat-item">
              <h3 className="gradient-text">5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3 className="gradient-text">50+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-item">
              <h3 className="gradient-text">10+</h3>
              <p>Technologies</p>
            </div>
          </motion.div>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <button className="btn btn-primary" onClick={downloadResume}>
              <FaDownload /> Download Resume
            </button>
            <a href="#contact" className="btn">
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="https://www.linkedin.com/in/adate/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@AkshayAdate"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link youtube"
            >
              <FaYoutube />
            </a>
            <a
              href="mailto:contact.akshayna@gmail.com"
              className="social-link"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="image-wrapper">
            <div className="glow-circle"></div>
            <div className="avatar-placeholder">
              <span className="avatar-text">AA</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="mouse"></div>
        <p>Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default Hero;
