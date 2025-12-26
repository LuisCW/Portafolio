import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaServer, FaDatabase, FaMobile } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const t = translations[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const specialties = [
    {
      icon: <FaCode />,
      title: t.about.specialties.frontend.title,
      description: t.about.specialties.frontend.description
    },
    {
      icon: <FaServer />,
      title: t.about.specialties.backend.title,
      description: t.about.specialties.backend.description
    },
    {
      icon: <FaDatabase />,
      title: t.about.specialties.database.title,
      description: t.about.specialties.database.description
    },
    {
      icon: <FaMobile />,
      title: t.about.specialties.devops.title,
      description: t.about.specialties.devops.description
    }
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div 
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">{t.about.title}</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <p>{t.about.description1}</p>
            <p>{t.about.description2}</p>
            <p>{t.about.description3}</p>
          </motion.div>

          <motion.div className="specialties-grid" variants={itemVariants}>
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                className="specialty-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(102, 126, 234, 0.2)"
                }}
              >
                <div className="specialty-icon">{specialty.icon}</div>
                <h3>{specialty.title}</h3>
                <p>{specialty.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
