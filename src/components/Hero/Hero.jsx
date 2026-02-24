import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaYoutube } from 'react-icons/fa';
import './Hero.css';
import resumePDF from '../../assets/resume/Akshay-Adate.pdf';

const Hero = () => {
  const downloadResume = () => {
    // Create resume download link
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Akshay-Adate.pdf';
    link.click();
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-greeting"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="wave">👋</span> Hi, I'm
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Akshay Namdeo Adate
          </motion.h1>

          <div className="hero-title">
            <TypeAnimation
              sequence={[
                'Senior AI Engineer',
                2000,
                'Full-stack Developer',
                2000,
                'GenAI Specialist',
                2000,
                'Cloud Architect',
                2000,
                'Tech Enthusiast',
                2000,
                'Content Creator',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="gradient-text"
            />
          </div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Building scalable, cloud-native AI applications with 5+ years of expertise in
            Node.js, React, Python, and AWS. Passionate about Generative AI, conversational
            systems, and creating impactful solutions.
          </motion.p>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="stat-item">
              <h3 className="gradient-text">5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3 className="gradient-text">50+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-item">
              <h3 className="gradient-text">10+</h3>
              <p>Technologies</p>
            </div>
          </motion.div>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <button className="btn btn-primary" onClick={downloadResume}>
              <FaDownload /> Download Resume
            </button>
            <a href="#contact" className="btn">
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="https://www.linkedin.com/in/adate/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@AkshayAdate"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link youtube"
            >
              <FaYoutube />
            </a>
            <a
              href="mailto:contact.akshayna@gmail.com"
              className="social-link"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="tech-animation-container">
            {/* Horizontal Scrolling Text Streams */}
            <div className="text-stream stream-1">
              <div className="stream-content">
                <span>GenAI</span>
                <span>LLM</span>
                <span>RAG</span>
                <span>Transformers</span>
                <span>NLP</span>
                <span>Deep Learning</span>
                <span>Neural Networks</span>
                <span>AWS Bedrock</span>
                <span>OpenAI</span>
                <span>Claude</span>
              </div>
              <div className="stream-content">
                <span>GenAI</span>
                <span>LLM</span>
                <span>RAG</span>
                <span>Transformers</span>
                <span>NLP</span>
                <span>Deep Learning</span>
                <span>Neural Networks</span>
                <span>AWS Bedrock</span>
                <span>OpenAI</span>
                <span>Claude</span>
              </div>
            </div>

            <div className="text-stream stream-2">
              <div className="stream-content">
                <span>TensorFlow</span>
                <span>PyTorch</span>
                <span>Keras</span>
                <span>React</span>
                <span>Node.js</span>
                <span>Python</span>
                <span>TypeScript</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>GraphQL</span>
              </div>
              <div className="stream-content">
                <span>TensorFlow</span>
                <span>PyTorch</span>
                <span>Keras</span>
                <span>React</span>
                <span>Node.js</span>
                <span>Python</span>
                <span>TypeScript</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>GraphQL</span>
              </div>
            </div>

            <div className="text-stream stream-3">
              <div className="stream-content">
                <span>Agentic AI</span>
                <span>ML Ops</span>
                <span>Vector DB</span>
                <span>LangChain</span>
                <span>Embeddings</span>
                <span>Fine-tuning</span>
                <span>RLHF</span>
                <span>Prompt Eng</span>
                <span>Diffusion</span>
                <span>GPT-4</span>
              </div>
              <div className="stream-content">
                <span>Agentic AI</span>
                <span>ML Ops</span>
                <span>Vector DB</span>
                <span>LangChain</span>
                <span>Embeddings</span>
                <span>Fine-tuning</span>
                <span>RLHF</span>
                <span>Prompt Eng</span>
                <span>Diffusion</span>
                <span>GPT-4</span>
              </div>
            </div>

            <div className="text-stream stream-4">
              <div className="stream-content">
                <span>Azure AI</span>
                <span>AWS Lambda</span>
                <span>S3</span>
                <span>DynamoDB</span>
                <span>MongoDB</span>
                <span>PostgreSQL</span>
                <span>Redis</span>
                <span>Elasticsearch</span>
                <span>Kafka</span>
                <span>Serverless</span>
              </div>
              <div className="stream-content">
                <span>Azure AI</span>
                <span>AWS Lambda</span>
                <span>S3</span>
                <span>DynamoDB</span>
                <span>MongoDB</span>
                <span>PostgreSQL</span>
                <span>Redis</span>
                <span>Elasticsearch</span>
                <span>Kafka</span>
                <span>Serverless</span>
              </div>
            </div>

            <div className="text-stream stream-5">
              <div className="stream-content">
                <span>Computer Vision</span>
                <span>Stable Diff</span>
                <span>DALL-E</span>
                <span>Gemini</span>
                <span>Scikit-learn</span>
                <span>Pandas</span>
                <span>NumPy</span>
                <span>REST API</span>
                <span>Microservices</span>
                <span>CI/CD</span>
              </div>
              <div className="stream-content">
                <span>Computer Vision</span>
                <span>Stable Diff</span>
                <span>DALL-E</span>
                <span>Gemini</span>
                <span>Scikit-learn</span>
                <span>Pandas</span>
                <span>NumPy</span>
                <span>REST API</span>
                <span>Microservices</span>
                <span>CI/CD</span>
              </div>
            </div>

            {/* Center Glow Effect */}
            <div className="center-glow"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="mouse"></div>
        <p>Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default Hero;
