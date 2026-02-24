import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import './ThreeDUniverse.css';

// Rotating Planet Component
function Planet({ position, color, size, label }) {
  const meshRef = useRef();
  const ringRef = useRef();
  
  useFrame((state) => {
    // Rotate planet
    meshRef.current.rotation.y += 0.01;
    // Float animation
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    
    // Rotate ring in opposite direction
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.005;
    }
  });

  return (
    <group position={position}>
      {/* Planet with glow */}
      <Sphere ref={meshRef} args={[size, 32, 32]}>
        <meshStandardMaterial 
          color={color} 
          roughness={0.4} 
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </Sphere>
      
      {/* Orbital ring for larger planets */}
      {size >= 0.7 && (
        <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[size * 1.5, 0.02, 16, 100]} />
          <meshStandardMaterial 
            color={color} 
            transparent 
            opacity={0.4}
            emissive={color}
            emissiveIntensity={0.5}
          />
        </mesh>
      )}
      
      {/* Planet label */}
      <Text
        position={[0, size + 0.6, 0]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {label}
      </Text>
      
      {/* Small orbiting moon for main planets */}
      {size >= 0.8 && (
        <group>
          <mesh position={[size * 2, 0, 0]}>
            <sphereGeometry args={[size * 0.15, 16, 16]} />
            <meshStandardMaterial color="#aaaaaa" />
          </mesh>
        </group>
      )}
    </group>
  );
}

// Fallback component when WebGL is not available
function WebGLFallback() {
  return (
    <div className="webgl-fallback">
      <div className="fallback-content">
        <h2>⚠️ WebGL Not Available</h2>
        <p>This experiment requires WebGL support, which is currently disabled or unavailable in your browser.</p>
        <div className="fallback-tips">
          <h3>To enable WebGL:</h3>
          <ul>
            <li>Try using a different browser (Chrome, Firefox, or Safari)</li>
            <li>Enable hardware acceleration in your browser settings</li>
            <li>Update your graphics drivers</li>
            <li>Check if WebGL is blocked by browser policies</li>
          </ul>
        </div>
        <div className="fallback-preview">
          <div className="planet-preview" style={{ background: '#00d9ff', width: '100px', height: '100px' }}>Projects</div>
          <div className="planet-preview" style={{ background: '#667eea', width: '80px', height: '80px' }}>Skills</div>
          <div className="planet-preview" style={{ background: '#f64f59', width: '90px', height: '90px' }}>About</div>
          <div className="planet-preview" style={{ background: '#00ff88', width: '70px', height: '70px' }}>Contact</div>
          <div className="planet-preview" style={{ background: '#ffaa00', width: '85px', height: '85px' }}>Experience</div>
          <div className="planet-preview" style={{ background: '#ff6b9d', width: '50px', height: '50px' }}>Education</div>
          <div className="planet-preview" style={{ background: '#c471f5', width: '60px', height: '60px' }}>Certs</div>
          <div className="planet-preview" style={{ background: '#00e5ff', width: '55px', height: '55px' }}>Hobbies</div>
          <div className="planet-preview" style={{ background: '#ffd93d', width: '50px', height: '50px' }}>Companies</div>
          <div className="planet-preview" style={{ background: '#6bcf7f', width: '65px', height: '65px' }}>AI & ML</div>
          <div className="planet-preview" style={{ background: '#ff7f50', width: '45px', height: '45px' }}>Cloud</div>
          <div className="planet-preview" style={{ background: '#4ecdc4', width: '50px', height: '50px' }}>DevOps</div>
        </div>
      </div>
    </div>
  );
}

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

const ThreeDUniverse = () => {
  const [webGLError, setWebGLError] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check WebGL support on mount
    const supported = checkWebGLSupport();
    setHasWebGL(supported);
    if (!supported) {
      setWebGLError(true);
    }
  }, []);

  const planets = [
    // Main Portfolio Sections
    { position: [4, 0, 0], color: '#00d9ff', size: 1.0, label: 'Projects' },
    { position: [-4, 0, 3], color: '#667eea', size: 0.8, label: 'Skills' },
    { position: [0, 3, -4], color: '#f64f59', size: 0.9, label: 'About Me' },
    { position: [-3, -3, -3], color: '#00ff88', size: 0.7, label: 'Contact' },
    { position: [3, -2, 4], color: '#ffaa00', size: 0.85, label: 'Experience' },
    
    // Additional Information Planets
    { position: [2, 3, 2], color: '#ff6b9d', size: 0.5, label: 'Education' },
    { position: [-2, 2, -2], color: '#c471f5', size: 0.6, label: 'Certificates' },
    { position: [4, -3, -2], color: '#00e5ff', size: 0.55, label: 'Hobbies' },
    { position: [-4, -1, 1], color: '#ffd93d', size: 0.5, label: 'Companies' },
    { position: [0, -4, 0], color: '#6bcf7f', size: 0.65, label: 'AI & ML' },
    { position: [2, 1, -4], color: '#ff7f50', size: 0.45, label: 'Cloud' },
    { position: [-3, 3, 3], color: '#4ecdc4', size: 0.5, label: 'DevOps' },
  ];

  if (webGLError || !hasWebGL) {
    return <WebGLFallback />;
  }

  return (
    <div className="three-d-universe">
      <div className="universe-instructions">
        <p>🖱️ Drag to rotate • Scroll to zoom • Explore {planets.length} planets</p>
      </div>
      {hasWebGL && (
        <Canvas 
          camera={{ position: [0, 0, 8], fov: 60 }}
          onCreated={({ gl }) => {
            console.log('WebGL context created successfully');
          }}
          onError={(error) => {
            console.error('WebGL Error:', error);
            setWebGLError(true);
          }}
          gl={{ 
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
        >
          {/* Enhanced Lighting */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d9ff" />
          <spotLight 
            position={[0, 15, 0]} 
            intensity={0.8} 
            angle={0.6} 
            penumbra={1} 
            color="#667eea"
          />
          
          {/* Background Stars */}
          <Stars 
            radius={100} 
            depth={50} 
            count={8000} 
            factor={6} 
            saturation={0.5}
            fade 
            speed={1} 
          />
          
          {/* Planets */}
          {planets.map((planet, index) => (
            <Planet key={index} {...planet} />
          ))}
          
          {/* Central Sun/Core */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial 
              color="#ffff00" 
              emissive="#ffaa00"
              emissiveIntensity={2}
              toneMapped={false}
            />
          </mesh>
          
          {/* Orbit Controls */}
          <OrbitControls 
            enableZoom={true} 
            enablePan={true}
            minDistance={5}
            maxDistance={20}
            autoRotate={false}
            autoRotateSpeed={0.5}
          />
        </Canvas>
      )}
    </div>
  );
};

export default ThreeDUniverse;
