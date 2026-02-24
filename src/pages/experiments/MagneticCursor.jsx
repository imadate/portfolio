import { useEffect, useRef } from 'react';
import './MagneticCursor.css';

const MagneticCursor = () => {
  const cursorRef = useRef(null);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const buttons = buttonsRef.current;

    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';

      buttons.forEach(button => {
        const rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        if (distance < 150) {
          const strength = (150 - distance) / 150;
          const moveX = distanceX * strength * 0.3;
          const moveY = distanceY * strength * 0.3;
          
          button.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + strength * 0.1})`;
        } else {
          button.style.transform = 'translate(0, 0) scale(1)';
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const addButtonRef = (el) => {
    if (el && !buttonsRef.current.includes(el)) {
      buttonsRef.current.push(el);
    }
  };

  return (
    <div className="magnetic-cursor-demo">
      <div ref={cursorRef} className="magnetic-cursor"></div>
      
      <div className="magnetic-content">
        <h2>Magnetic Cursor Effect</h2>
        <p>Move your mouse near the buttons and watch them get attracted!</p>
        
        <div className="magnetic-buttons">
          <button ref={addButtonRef} className="magnetic-btn btn-1">
            🚀 Launch
          </button>
          <button ref={addButtonRef} className="magnetic-btn btn-2">
            💡 Explore
          </button>
          <button ref={addButtonRef} className="magnetic-btn btn-3">
            ⚡ Discover
          </button>
          <button ref={addButtonRef} className="magnetic-btn btn-4">
            🎯 Target
          </button>
          <button ref={addButtonRef} className="magnetic-btn btn-5">
            ✨ Magic
          </button>
          <button ref={addButtonRef} className="magnetic-btn btn-6">
            🔥 Fire
          </button>
        </div>
      </div>
    </div>
  );
};

export default MagneticCursor;
