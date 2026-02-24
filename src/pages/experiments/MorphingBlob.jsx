import { useEffect, useRef } from 'react';
import './MorphingBlob.css';

const MorphingBlob = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let time = 0;
    const points = 8;
    const radius = 150;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      ctx.beginPath();
      
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const wobble = Math.sin(time + i) * 30;
        const r = radius + wobble;
        
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.closePath();
      
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, '#00d9ff');
      gradient.addColorStop(0.5, '#667eea');
      gradient.addColorStop(1, '#f64f59');
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      ctx.shadowBlur = 50;
      ctx.shadowColor = '#00d9ff';
      
      time += 0.03;
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);

  return (
    <div className="morphing-blob-demo">
      <canvas ref={canvasRef} className="blob-canvas"></canvas>
      <div className="blob-info">
        <h2>Morphing Liquid Blob</h2>
        <p>Watch the blob constantly morph and change shape!</p>
      </div>
    </div>
  );
};

export default MorphingBlob;
