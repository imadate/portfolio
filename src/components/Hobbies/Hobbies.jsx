import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaYoutube, FaPlane, FaVideo, FaCamera, 
  FaCode, FaLaptopCode 
} from 'react-icons/fa';
import './Hobbies.css';

const Hobbies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [youtubeStats, setYoutubeStats] = useState({
    subscribers: '1.2K+',
    views: '50K+',
    videos: '25+',
  });

  const hobbies = [
    {
      icon: <FaYoutube />,
      title: 'YouTube Content',
      description: 'Creating and sharing travel videos and vlogs capturing adventures around the world',
      color: '#FF0000',
    },
    {
      icon: <FaPlane />,
      title: 'Traveling',
      description: 'Exploring new places, cultures, and capturing beautiful moments',
      color: '#00D9FF',
    },
    {
      icon: <FaVideo />,
      title: 'Vlogging',
      description: 'Creating engaging travel vlogs and documenting experiences',
      color: '#667eea',
    },
    {
      icon: <FaCamera />,
      title: 'Video Editing',
      description: 'Crafting cinematic videos with creative editing techniques',
      color: '#F59E0B',
    },
    {
      icon: <FaLaptopCode />,
      title: 'Tech Exploration',
      description: 'Experimenting with new technologies, frameworks, and tools',
      color: '#10B981',
    },
  ];

  return (
    <section id="hobbies" className="hobbies" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Hobbies & <span className="gradient-text">Passions</span>
          </h2>
          <p className="section-subtitle">
            Beyond coding - What I love to do
          </p>
        </motion.div>

        {/* YouTube Section */}
        <motion.div
          className="youtube-section"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="youtube-card card">
            <div className="youtube-header">
              <FaYoutube className="youtube-icon" />
              <div>
                <h3 className="youtube-title">My YouTube Channel</h3>
                <p className="youtube-subtitle">Travel Vlogs & Adventures</p>
              </div>
            </div>

            <div className="youtube-stats">
              <div className="stat-box">
                <h4>{youtubeStats.subscribers}</h4>
                <p>Subscribers</p>
              </div>
              <div className="stat-box">
                <h4>{youtubeStats.views}</h4>
                <p>Total Views</p>
              </div>
              <div className="stat-box">
                <h4>{youtubeStats.videos}</h4>
                <p>Videos</p>
              </div>
            </div>

            <a
              href="https://www.youtube.com/@AkshayAdate"
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-button"
            >
              <FaYoutube /> Visit My Channel
            </a>

            <div className="youtube-glow"></div>
          </div>
        </motion.div>

        {/* Hobbies Grid */}
        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              className="hobby-card card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              style={{ '--hobby-color': hobby.color }}
            >
              <div className="hobby-icon">{hobby.icon}</div>
              <h3 className="hobby-title">{hobby.title}</h3>
              <p className="hobby-description">{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
