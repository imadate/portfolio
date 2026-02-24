import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaRocket, FaCode, FaMagic } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Experiments.css';

// Import experiment components
import TerminalMode from './experiments/TerminalMode';
import ThreeDUniverse from './experiments/ThreeDUniverse';
import MagneticCursor from './experiments/MagneticCursor';
import HolographicCards from './experiments/HolographicCards';
import VoiceControl from './experiments/VoiceControl';
import MorphingBlob from './experiments/MorphingBlob';
import CursorTrail from './experiments/CursorTrail';
import NewspaperLayout from './experiments/NewspaperLayout';
import CosmicLoading from './experiments/CosmicLoading';
import SplitPersonality from './experiments/SplitPersonality';
import ScrollJacking from './experiments/ScrollJacking';

const Experiments = () => {
  const navigate = useNavigate();
  const [activeExperiment, setActiveExperiment] = useState(null);

  const experiments = [
    {
      id: 1,
      title: 'Terminal/Hacker Mode',
      description: 'Command-line interface with typing commands, auto-complete, and Matrix effects',
      icon: '💻',
      component: TerminalMode,
      difficulty: 'Medium',
      tech: ['JavaScript', 'CLI', 'Animation']
    },
    {
      id: 2,
      title: '3D Interactive Universe',
      description: 'Navigate through a 3D space with floating planets and cosmic animations',
      icon: '🌌',
      component: ThreeDUniverse,
      difficulty: 'Advanced',
      tech: ['Three.js', 'React Three Fiber', '3D']
    },
    {
      id: 5,
      title: 'Interactive Code Editor',
      description: 'Live code editor where you can edit and see changes in real-time',
      icon: '💡',
      component: null,
      difficulty: 'Medium',
      tech: ['Monaco Editor', 'JavaScript', 'Live Preview']
    },
    {
      id: 6,
      title: 'Gamified Portfolio',
      description: 'Side-scroller game where you jump through projects and collect badges',
      icon: '🎮',
      component: null,
      difficulty: 'Advanced',
      tech: ['Phaser.js', 'Game Dev', 'Pixel Art']
    },
    {
      id: 7,
      title: 'Holographic Card Effect',
      description: 'Cards with holographic shimmer, 3D tilt, and reflective gradients',
      icon: '🎴',
      component: HolographicCards,
      difficulty: 'Easy',
      tech: ['CSS', 'Vanilla Tilt', '3D Transform']
    },
    {
      id: 10,
      title: 'Morphing Liquid Blob',
      description: 'Animated liquid blob that morphs with mouse ripple effects',
      icon: '🌊',
      component: MorphingBlob,
      difficulty: 'Medium',
      tech: ['Canvas', 'Metaballs', 'Animation']
    },
    {
      id: 11,
      title: 'Cursor Trail Magic',
      description: 'Glowing particle trail with different effects based on hover targets',
      icon: '✨',
      component: CursorTrail,
      difficulty: 'Easy',
      tech: ['Canvas', 'GSAP', 'Particles']
    },
    {
      id: 12,
      title: 'Newspaper/Magazine Layout',
      description: 'Interactive magazine with animated page turns and editorial styling',
      icon: '📰',
      component: NewspaperLayout,
      difficulty: 'Medium',
      tech: ['CSS Grid', 'Page Turn', 'Typography']
    },
    {
      id: 13,
      title: 'Cosmic Loading Experience',
      description: 'Epic 3D loading with universe formation and wormhole transition',
      icon: '🌠',
      component: CosmicLoading,
      difficulty: 'Advanced',
      tech: ['Three.js', 'Particles', 'Animation']
    },
    {
      id: 14,
      title: 'Split Personality Mode',
      description: 'Toggle between Professional and Creative modes with morphing transitions',
      icon: '😎',
      component: SplitPersonality,
      difficulty: 'Medium',
      tech: ['React', 'CSS Variables', 'Transitions']
    },
    {
      id: 15,
      title: 'Scroll-Jacking Sections',
      description: 'Full viewport sections with snap scrolling and 3D flip transitions',
      icon: '🎢',
      component: ScrollJacking,
      difficulty: 'Medium',
      tech: ['Scroll Snap', '3D Transform', 'GSAP']
    }
  ];

  const handleBack = () => {
    if (activeExperiment) {
      setActiveExperiment(null);
    } else {
      navigate('/');
    }
  };

  const handleExperimentClick = (experiment) => {
    if (experiment.component) {
      setActiveExperiment(experiment);
    } else {
      alert('🚧 This experiment is coming soon! Stay tuned...');
    }
  };

  return (
    <div className="experiments-page">
      <motion.button
        className="back-button"
        onClick={handleBack}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowLeft /> Back {activeExperiment ? 'to Experiments' : 'to Portfolio'}
      </motion.button>

      <AnimatePresence mode="wait">
        {!activeExperiment ? (
          <motion.div
            key="grid"
            className="experiments-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="experiments-header"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="experiments-title">
                <FaRocket className="title-icon" />
                My Experiments
                <FaMagic className="title-icon magic" />
              </h1>
              <p className="experiments-subtitle">
                Interactive playground of mind-blowing effects and creative experiments
              </p>
              <div className="experiments-stats">
                <div className="stat">
                  <span className="stat-number">{experiments.length}</span>
                  <span className="stat-label">Experiments</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Interactive</span>
                </div>
                <div className="stat">
                  <span className="stat-number">∞</span>
                  <span className="stat-label">Creativity</span>
                </div>
              </div>
            </motion.div>

            <div className="experiments-grid">
              {experiments.map((experiment, index) => (
                <motion.div
                  key={experiment.id}
                  className={`experiment-card ${!experiment.component ? 'coming-soon' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => handleExperimentClick(experiment)}
                >
                  <div className="experiment-icon">{experiment.icon}</div>
                  <h3 className="experiment-title">{experiment.title}</h3>
                  <p className="experiment-description">{experiment.description}</p>
                  
                  <div className="experiment-meta">
                    <span className={`difficulty ${experiment.difficulty.toLowerCase()}`}>
                      {experiment.difficulty}
                    </span>
                    <div className="tech-badges">
                      {experiment.tech.slice(0, 2).map((tech, i) => (
                        <span key={i} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {!experiment.component && (
                    <div className="coming-soon-badge">Coming Soon</div>
                  )}

                  <div className="experiment-overlay">
                    <FaCode className="overlay-icon" />
                    <span>Click to Experience</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="experiments-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p>More experiments coming soon! Each one is a unique interactive experience.</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="experiment"
            className="experiment-viewer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="experiment-viewer-header">
              <h2>{activeExperiment.icon} {activeExperiment.title}</h2>
              <p>{activeExperiment.description}</p>
            </div>
            <div className="experiment-content">
              {activeExperiment.component && <activeExperiment.component />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Experiments;
