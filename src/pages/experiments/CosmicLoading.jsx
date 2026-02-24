import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import './CosmicLoading.css';

// Check WebGL support
function checkWebGLSupport() {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch (e) {
    return false;
  }
}

function FormingUniverse() {
  const particlesRef = useRef();
  
  useEffect(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 100;
      vertices.push(x, y, z);
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    particlesRef.current = geometry;
  }, []);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points>
      <bufferGeometry ref={particlesRef} />
      <pointsMaterial color="#00d9ff" size={0.1} />
    </points>
  );
}

// CSS Fallback Animation
function CSSFallback() {
  return (
    <div className="css-cosmic-loading">
      <div className="css-stars">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="css-star" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      <div className="cosmic-text">
        <h1 className="cosmic-title">UNIVERSE FORMING</h1>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <p className="cosmic-subtitle">Creating your experience...</p>
        <p className="fallback-notice">⚠️ Using CSS animation (WebGL unavailable)</p>
      </div>
    </div>
  );
}

const CosmicLoading = () => {
  const [webGLError, setWebGLError] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const supported = checkWebGLSupport();
    setHasWebGL(supported);
    if (!supported) {
      setWebGLError(true);
    }
  }, []);

  if (webGLError || !hasWebGL) {
    return <CSSFallback />;
  }

  return (
    <div className="cosmic-loading-demo">
      {hasWebGL && (
        <Canvas 
          camera={{ position: [0, 0, 30], fov: 75 }}
          onError={(error) => {
            console.error('WebGL Error in CosmicLoading:', error);
            setWebGLError(true);
          }}
          gl={{ 
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
        >
          <ambientLight intensity={0.5} />
          <Stars radius={100} depth={50} count={5000} factor={4} fade speed={2} />
          <FormingUniverse />
        </Canvas>
      )}
      
      <div className="cosmic-text">
        <h1 className="cosmic-title">UNIVERSE FORMING</h1>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <p className="cosmic-subtitle">Creating your experience...</p>
      </div>
    </div>
  );
};

export default CosmicLoading;
