import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Eli Lilly',
      role: 'Fullstack Engineer',
      period: 'April 2023 - Present',
      location: 'Bangalore, India',
      achievements: [
        'Developed LLM-powered, GenAI & Agentic AI workflows using AWS Bedrock',
        'Built enterprise chatbots with Microsoft Language Studio, RAG, and OpenAI',
        'Designed cloud-native microservices using Python, Node.js, Azure Functions',
        'Implemented complete observability architecture with Power BI dashboards',
        'Reduced deployment time by 40% through CI/CD automation',
      ],
      technologies: ['AWS Bedrock', 'Azure', 'Node.js', 'Python', 'GenAI', 'RAG', 'Power BI'],
    },
    {
      company: 'IBM',
      role: 'AI Engineer',
      period: 'May 2022 - March 2023',
      location: 'Mumbai, India',
      achievements: [
        'Built AI automation workflows using Python, Node.js, and IBM Watson',
        'Integrated Genesys, Twilio for multichannel chatbot/voicebot solutions',
        'Improved automation speed and accuracy for enterprise workflows',
        'Delivered multilingual IVR & AI solutions for enterprise clients',
      ],
      technologies: ['IBM Watson', 'Python', 'Node.js', 'Twilio', 'Genesys', 'NLP'],
    },
    {
      company: 'Quantiphi',
      role: 'Conversational AI Engineer',
      period: 'Jan 2020 - May 2022',
      location: 'Mumbai, India',
      achievements: [
        'Designed large-scale Conversational AI solutions for government & enterprise',
        'Implemented knowledge connectors and dynamic FAQ systems',
        'Built real-time integrations using webhook-based orchestration',
        'Developed scalable web applications using Angular, Node.js, Firestore',
        'Enabled platform scalability for millions of users nationwide',
      ],
      technologies: ['Dialogflow', 'Angular', 'Node.js', 'Firestore', 'NLP', 'GCP'],
    },
  ];

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey and achievements
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="timeline-marker">
                <FaBriefcase />
              </div>

              <div className="timeline-content card">
                <div className="experience-header">
                  <div>
                    <h3 className="company-name gradient-text">{exp.company}</h3>
                    <h4 className="role-title">{exp.role}</h4>
                  </div>
                  <div className="experience-meta">
                    <div className="meta-item">
                      <FaCalendar /> {exp.period}
                    </div>
                    <div className="meta-item">
                      <FaMapMarkerAlt /> {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="achievements-list">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>

                <div className="technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
