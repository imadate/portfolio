import { useState } from 'react';
import './SplitPersonality.css';

const SplitPersonality = () => {
  const [mode, setMode] = useState('professional');

  const toggleMode = () => {
    setMode(mode === 'professional' ? 'creative' : 'professional');
  };

  return (
    <div className={`split-personality-demo ${mode}`}>
      <div className="mode-content">
        {mode === 'professional' ? (
          <div className="professional-mode">
            <h2>Professional Mode</h2>
            <p>Clean, minimal, corporate design</p>
            <div className="mode-features">
              <div className="feature">✓ Formal Typography</div>
              <div className="feature">✓ Structured Layout</div>
              <div className="feature">✓ Business Colors</div>
              <div className="feature">✓ Data-Driven</div>
            </div>
          </div>
        ) : (
          <div className="creative-mode">
            <h2>Creative Mode</h2>
            <p>Wild colors, animations, experiments!</p>
            <div className="mode-features">
              <div className="feature">🎨 Vibrant Colors</div>
              <div className="feature">✨ Crazy Animations</div>
              <div className="feature">🚀 Experimental</div>
              <div className="feature">💫 Bold Design</div>
            </div>
          </div>
        )}
      </div>

      <button className="toggle-btn" onClick={toggleMode}>
        Switch to {mode === 'professional' ? 'Creative' : 'Professional'} Mode
      </button>
    </div>
  );
};

export default SplitPersonality;
