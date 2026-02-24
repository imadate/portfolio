import { useState } from 'react';
import './VoiceControl.css';

const VoiceControl = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');

  const startListening = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.lang = 'en-US';
      recognition.continuous = false;
      
      recognition.onstart = () => {
        setIsListening(true);
        setResponse('Listening...');
      };
      
      recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        setTranscript(command);
        handleCommand(command);
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
      recognition.start();
    } else {
      setResponse('Speech recognition not supported in this browser. Try Chrome!');
    }
  };

  const handleCommand = (command) => {
    if (command.includes('project')) {
      setResponse('Showing projects section!');
    } else if (command.includes('skill')) {
      setResponse('Displaying skills!');
    } else if (command.includes('contact')) {
      setResponse('Opening contact information!');
    } else if (command.includes('about')) {
      setResponse('Showing about section!');
    } else {
      setResponse(`Command "${command}" not recognized. Try saying "show projects", "show skills", etc.`);
    }
  };

  return (
    <div className="voice-control-demo">
      <div className="voice-content">
        <h2>🎤 Voice-Controlled Portfolio</h2>
        <p>Click the microphone and try saying:</p>
        
        <div className="voice-commands">
          <span>"Show me projects"</span>
          <span>"Show skills"</span>
          <span>"Show contact"</span>
          <span>"Show about"</span>
        </div>

        <button
          className={`voice-button ${isListening ? 'listening' : ''}`}
          onClick={startListening}
          disabled={isListening}
        >
          <div className="mic-icon">🎤</div>
          {isListening && (
            <div className="listening-animation">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </button>

        {transcript && (
          <div className="voice-transcript">
            <strong>You said:</strong> "{transcript}"
          </div>
        )}

        {response && (
          <div className="voice-response">
            <strong>Response:</strong> {response}
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceControl;
