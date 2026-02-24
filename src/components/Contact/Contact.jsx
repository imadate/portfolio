import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import resumePDF from '../../assets/resume/Akshay-Adate.pdf';
import { 
  FaEnvelope, FaLinkedin, FaYoutube, FaMapMarkerAlt, 
  FaPhone, FaGithub, FaDownload 
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'contact.akshayna@gmail.com',
      link: 'mailto:contact.akshayna@gmail.com',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 86005 47187',
      link: 'tel:+918600547187',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Bangalore, India',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/adate/',
      color: '#0077B5',
    },
    {
      icon: <FaYoutube />,
      name: 'YouTube',
      url: 'https://www.youtube.com/@AkshayAdate',
      color: '#FF0000',
    },
    {
      icon: <FaEnvelope />,
      name: 'Email',
      url: 'mailto:contact.akshayna@gmail.com',
      color: '#EA4335',
    },
  ];

  const downloadResume = () => {
    // Create resume download link
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Akshay-Adate.pdf';
    link.click();
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Let's discuss your next project or opportunity
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="gradient-text">Let's Connect</h3>
            <p className="contact-description">
              I'm currently <strong>open to new opportunities</strong> and exciting projects.
              Whether you want to discuss a job opportunity, collaborate on a project, 
              or just say hi, feel free to reach out!
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <p className="contact-label">{info.label}</p>
                    {info.link ? (
                      <a href={info.link} className="contact-value">
                        {info.value}
                      </a>
                    ) : (
                      <p className="contact-value">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-large"
                  style={{ '--social-color': social.color }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {social.icon}
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>

            <motion.button
              className="btn btn-primary download-resume"
              onClick={downloadResume}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download Resume
            </motion.button>
          </motion.div>

          <motion.div
            className="contact-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className="visual-card card">
              <div className="visual-content">
                <div className="code-window">
                  <div className="window-header">
                    <div className="window-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <p>contact.js</p>
                  </div>
                  <div className="window-body">
                    <pre>
{`const contact = {
  name: "Akshay Adate",
  role: "AI Engineer",
  location: "Bangalore",
  experience: "5+ years",
  status: "🟢 Available",
  interests: [
    "GenAI",
    "Full-stack",
    "Cloud",
    "Content Creation"
  ]
};

// Let's build something!
console.log(contact);`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="contact-footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p>© 2026 Akshay Adate. Built with React & Passion 💙</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
