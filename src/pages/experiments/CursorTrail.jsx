import { useEffect, useRef } from 'react';
import './CursorTrail.css';

const CursorTrail = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      for (let i = 0; i < 3; i++) {
        particles.current.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
          size: Math.random() * 5 + 2,
          hue: Math.random() * 60 + 180
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.current = particles.current.filter(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        p.vy += 0.1; // gravity
        
        if (p.life > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${p.life})`;
          ctx.shadowBlur = 15;
          ctx.shadowColor = `hsl(${p.hue}, 100%, 60%)`;
          ctx.fill();
          return true;
        }
        return false;
      });
      
      requestAnimationFrame(animate);
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    animate();
    
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-trail-demo">
      <canvas ref={canvasRef} className="trail-canvas"></canvas>
      <div className="trail-info">
        <h2>✨ Magical Cursor Trail</h2>
        <p>Move your mouse to create particles!</p>
      </div>
    </div>
  );
};

export default CursorTrail;
