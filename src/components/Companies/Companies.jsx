import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Companies.css';

// Import logos from assets
import quantiphiLogo from '../../assets/companies/Quantiphi_Logo.png';
import eliLillyLogo from '../../assets/companies/Eli_Lilly_and_Company.svg.png';
import ibmLogo from '../../assets/companies/IBM_logo.svg.png';

const Companies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const companies = [
    {
      name: 'Eli Lilly',
      logo: eliLillyLogo,
      description: 'Pharmaceutical',
      color: '#D4002A',
    },
    {
      name: 'IBM',
      logo: ibmLogo,
      description: 'Technology',
      color: '#0F62FE',
    },
    {
      name: 'Quantiphi',
      logo: quantiphiLogo,
      description: 'AI & Analytics',
      color: '#FF6B35',
    },
  ];

  return (
    <section id="companies" className="companies" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Companies I've <span className="gradient-text">Worked With</span>
          </h2>
          <p className="section-subtitle">
            Delivering excellence at leading organizations
          </p>
        </motion.div>

        <div className="companies-grid">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              className="company-card card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -15, scale: 1.05 }}
            >
              <div 
                className="company-logo"
                style={{ '--company-color': company.color }}
              >
                <img src={company.logo} alt={`${company.name} logo`} className="logo-image" />
              </div>
              <h3 className="company-name">{company.name}</h3>
              <p className="company-description">{company.description}</p>
              <div className="company-shine"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
