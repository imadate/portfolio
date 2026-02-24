import { useEffect } from 'react';
import './ScrollJacking.css';

const ScrollJacking = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-section');
    let currentSection = 0;

    const handleWheel = (e) => {
      e.preventDefault();
      
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        currentSection++;
      } else if (e.deltaY < 0 && currentSection > 0) {
        currentSection--;
      }
      
      sections[currentSection].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    };

    const container = document.querySelector('.scroll-jacking-demo');
    container?.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container?.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const sections = [
    { title: 'Section 1', subtitle: 'Welcome', color: '#667eea' },
    { title: 'Section 2', subtitle: 'About', color: '#f64f59' },
    { title: 'Section 3', subtitle: 'Projects', color: '#00d9ff' },
    { title: 'Section 4', subtitle: 'Contact', color: '#00ff88' }
  ];

  return (
    <div className="scroll-jacking-demo">
      {sections.map((section, index) => (
        <div
          key={index}
          className="scroll-section"
          style={{ background: section.color }}
        >
          <div className="section-content">
            <h2>{section.title}</h2>
            <p>{section.subtitle}</p>
            <div className="section-number">{index + 1}</div>
          </div>
        </div>
      ))}
      
      <div className="scroll-hint">
        <p>Scroll to navigate</p>
        <div className="scroll-arrow">↓</div>
      </div>
    </div>
  );
};

export default ScrollJacking;
