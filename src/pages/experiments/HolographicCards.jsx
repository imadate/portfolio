import { useEffect, useRef } from 'react';
import './HolographicCards.css';

const HolographicCards = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cardsRef.current.forEach(card => {
        card?.removeEventListener('mousemove', handleMouseMove);
        card?.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    
    // Update gradient position
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${percentX}%`);
    card.style.setProperty('--mouse-y', `${percentY}%`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  const addCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const projects = [
    {
      title: 'GenAI Platform',
      description: 'Enterprise-scale AI solution',
      tech: ['OpenAI', 'LangChain', 'React'],
      gradient: 'linear-gradient(135deg, #00d9ff, #667eea)'
    },
    {
      title: 'ML Pipeline',
      description: 'Automated data processing',
      tech: ['Python', 'TensorFlow', 'Docker'],
      gradient: 'linear-gradient(135deg, #f64f59, #c471ed)'
    },
    {
      title: 'Cloud Migration',
      description: 'Scalable AWS architecture',
      tech: ['AWS', 'Kubernetes', 'Node.js'],
      gradient: 'linear-gradient(135deg, #00ff88, #00d9ff)'
    }
  ];

  return (
    <div className="holographic-cards-demo">
      <div className="holo-header">
        <h2>Holographic Card Effect</h2>
        <p>Hover over cards to see the magic ✨</p>
      </div>
      
      <div className="holo-cards-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={addCardRef}
            className="holo-card"
            style={{ '--gradient': project.gradient }}
          >
            <div className="holo-shine"></div>
            <div className="holo-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="holo-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HolographicCards;
