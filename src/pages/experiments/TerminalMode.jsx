import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './TerminalMode.css';

const TerminalMode = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const commands = {
    help: 'Available commands: help, about, skills, projects, contact, clear, matrix, hack',
    about: '👨‍💻 AI Engineer | GenAI Specialist | Full-stack Developer\n5+ years building scalable cloud-native AI applications.',
    skills: '🚀 Skills:\n- Generative AI & LLMs\n- React, Node.js, Python\n- AWS, Azure, Docker\n- Machine Learning & NLP',
    projects: '📂 Projects:\n1. Enterprise GenAI Platform\n2. Conversational AI System\n3. ML Pipeline Automation\n4. Cloud Migration Solutions',
    contact: '📧 Email: contact.akshayna@gmail.com\n📱 Phone: +91 86005 47187\n🔗 LinkedIn: linkedin.com/in/adate/',
    clear: 'CLEAR',
    matrix: 'MATRIX',
    hack: 'HACK'
  };

  const commandList = Object.keys(commands);

  useEffect(() => {
    inputRef.current?.focus();
    addLine('Welcome to Akshay\'s Terminal Portfolio', 'success');
    addLine('Type "help" to see available commands', 'info');
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const addLine = (text, type = 'output') => {
    setHistory(prev => [...prev, { text, type, timestamp: Date.now() }]);
  };

  const handleCommand = (cmd) => {
    const command = cmd.trim().toLowerCase();
    addLine(`$ ${cmd}`, 'input');

    if (command === 'clear') {
      setHistory([]);
      return;
    }

    if (command === 'matrix') {
      addLine('Initializing Matrix mode...', 'success');
      startMatrixEffect();
      return;
    }

    if (command === 'hack') {
      addLine('Initiating hack sequence...', 'warning');
      simulateHack();
      return;
    }

    if (commands[command]) {
      addLine(commands[command], 'success');
    } else if (command) {
      addLine(`Command not found: ${command}. Type "help" for available commands.`, 'error');
    }
  };

  const startMatrixEffect = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    let count = 0;
    const interval = setInterval(() => {
      const randomChars = Array.from({ length: 50 }, () => 
        chars[Math.floor(Math.random() * chars.length)]
      ).join(' ');
      addLine(randomChars, 'matrix');
      count++;
      if (count >= 10) {
        clearInterval(interval);
        addLine('Matrix mode terminated.', 'success');
      }
    }, 200);
  };

  const simulateHack = () => {
    const steps = [
      'Connecting to mainframe...',
      'Bypassing firewall...',
      'Accessing database...',
      'Downloading files...',
      'Encrypting connection...',
      'Access granted! 🎉'
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        addLine(step, index === steps.length - 1 ? 'success' : 'warning');
      }, index * 800);
    });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // Auto-complete suggestions
    if (value) {
      const matches = commandList.filter(cmd => 
        cmd.startsWith(value.toLowerCase())
      );
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
      setSuggestions([]);
    } else if (e.key === 'Tab' && suggestions.length > 0) {
      e.preventDefault();
      setInput(suggestions[0]);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setSuggestions([]);
    inputRef.current?.focus();
  };

  return (
    <div className="terminal-mode">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="btn-close"></span>
          <span className="btn-minimize"></span>
          <span className="btn-maximize"></span>
        </div>
        <div className="terminal-title">akshay@portfolio:~$</div>
      </div>

      <div className="terminal-body" ref={terminalRef}>
        {history.map((line, index) => (
          <motion.div
            key={line.timestamp + index}
            className={`terminal-line ${line.type}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {line.text.split('\n').map((text, i) => (
              <div key={i}>{text}</div>
            ))}
          </motion.div>
        ))}

        <div className="terminal-input-line">
          <span className="terminal-prompt">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="terminal-input"
            autoFocus
            spellCheck={false}
          />
        </div>

        {suggestions.length > 0 && (
          <div className="terminal-suggestions">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="matrix-background"></div>
    </div>
  );
};

export default TerminalMode;
