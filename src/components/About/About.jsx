import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaLightbulb, FaHeart, FaGraduationCap } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const features = [
    {
      icon: <FaRocket />,
      title: 'Innovation Driven',
      description: 'Always exploring cutting-edge technologies like GenAI, LLMs, and cloud architectures to build next-gen solutions.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Problem Solver',
      description: 'Passionate about tackling complex challenges with creative and efficient technical solutions.',
    },
    {
      icon: <FaHeart />,
      title: 'User-Focused',
      description: 'Building applications that prioritize user experience, accessibility, and real-world impact.',
    },
    {
      icon: <FaGraduationCap />,
      title: 'Continuous Learner',
      description: 'Committed to staying ahead through certifications, hands-on projects, and industry best practices.',
    },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate AI Engineer & Full-stack Developer
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="gradient-text">Who I Am</h3>
            <p>
              I'm a <strong>Senior Full-stack & AI Engineer</strong> with over <strong>5 years of experience</strong> 
              building secure, scalable, and cloud-native applications. My expertise spans across 
              <strong> Node.js, React, Python, AWS, Azure</strong>, and cutting-edge <strong>Generative AI</strong> technologies.
            </p>
            <p>
              I specialize in creating <strong>conversational AI systems</strong>, implementing <strong>RAG pipelines</strong>, 
              and architecting <strong>event-driven microservices</strong> that power enterprise-scale applications.
              My work at companies like <strong>Eli Lilly, IBM, and Quantiphi</strong> has enabled me to deliver 
              production-grade solutions impacting millions of users.
            </p>
            <p>
              Beyond coding, I'm passionate about <strong>travel vlogging, video editing</strong>, and 
              exploring new places while capturing adventures through my <strong>YouTube channel</strong>. I believe in continuous learning 
              and staying at the forefront of technology innovation.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <div>
                  <h4>Mission</h4>
                  <p>Build AI-powered solutions that make a real-world impact</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💡</span>
                <div>
                  <h4>Philosophy</h4>
                  <p>Engineering excellence through clean code and best practices</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-features"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
