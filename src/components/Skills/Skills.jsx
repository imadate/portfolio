import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaNode, FaPython, FaAws, FaDocker, FaGitAlt,
  FaAngular, FaDatabase, FaCloud
} from 'react-icons/fa';
import { 
  SiTypescript, SiMongodb, SiPostgresql, SiGraphql, 
  SiTensorflow, SiOpenai, SiGooglecloud
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: <FaReact />, level: 95 },
        { name: 'Next.js', icon: <FaReact />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 90 },
        { name: 'Angular', icon: <FaAngular />, level: 85 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: <FaNode />, level: 95 },
        { name: 'Python', icon: <FaPython />, level: 90 },
        { name: 'Express.js', icon: <FaNode />, level: 95 },
        { name: 'GraphQL', icon: <SiGraphql />, level: 85 },
      ],
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'LLMs & GenAI', icon: <SiOpenai />, level: 95 },
        { name: 'RAG Systems', icon: <SiTensorflow />, level: 90 },
        { name: 'NLP', icon: <SiOpenai />, level: 90 },
        { name: 'Prompt Engineering', icon: <SiOpenai />, level: 95 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', icon: <FaAws />, level: 90 },
        { name: 'Azure', icon: <FaCloud />, level: 90 },
        { name: 'GCP', icon: <SiGooglecloud />, level: 80 },
        { name: 'Docker', icon: <FaDocker />, level: 85 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 90 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85 },
        { name: 'VectorDB', icon: <FaDatabase />, level: 85 },
        { name: 'Firestore', icon: <FaDatabase />, level: 90 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 95 },
        { name: 'CI/CD', icon: <FaDocker />, level: 90 },
        { name: 'Microservices', icon: <FaNode />, level: 90 },
        { name: 'REST APIs', icon: <FaNode />, level: 95 },
      ],
    },
  ];

  const conversationalAI = [
    'Dialogflow ES/CX',
    'Microsoft Language Studio',
    'IBM Watson',
    'Twilio',
    'Contact Center AI',
    'AWS Bedrock',
    'OpenAI Integration',
    'Genesys Cloud',
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-name">
                        <span className="skill-icon">{skill.icon}</span>
                        {skill.name}
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          duration: 1,
                          ease: 'easeOut'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="conversational-ai-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h3 className="gradient-text">Conversational AI Platforms</h3>
          <div className="ai-platforms">
            {conversationalAI.map((platform, index) => (
              <motion.div
                key={platform}
                className="platform-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {platform}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
