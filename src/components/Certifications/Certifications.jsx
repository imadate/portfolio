import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate, FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';
import certificatesData from '../../assets/certificates/certificates.json';
import { trackCertificateView } from '../../utils/analytics';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleCertificateClick = (cert) => {
    trackCertificateView(cert.title, cert.issuer);
    window.open(cert.credentialUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certifications" className="certifications" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-subtitle">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="certifications-grid">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="certification-card card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              onClick={() => handleCertificateClick(cert)}
              style={{ cursor: 'pointer' }}
            >
              <div className="cert-icon">
                {cert.icon === 'award' ? <FaAward /> : <FaCertificate />}
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <div className="cert-badge">
                <span>✓</span> Certified
              </div>
              <div className="cert-link-indicator">
                <FaExternalLinkAlt /> View Certificate
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className="gradient-text">Education</h3>
          <div className="education-grid">
            <div className="education-card card">
              <h4>Master of Computer Applications</h4>
              <p className="university">Pune University, Pune, India</p>
              <p className="period">Aug 2017 - May 2020</p>
            </div>
            <div className="education-card card">
              <h4>Bachelor of Computer Science</h4>
              <p className="university">Mumbai University, Mumbai, India</p>
              <p className="period">July 2013 - May 2017</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
