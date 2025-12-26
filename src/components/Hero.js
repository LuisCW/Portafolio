import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import './Hero.css';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-greeting" variants={itemVariants}>
          {t.hero.greeting}
        </motion.div>
        
        <motion.h1 className="hero-name" variants={itemVariants}>
          {t.hero.name}
        </motion.h1>
        
        <motion.div className="hero-title" variants={itemVariants}>
          <span className="typing-text">{t.hero.title}</span>
          <span className="cursor">|</span>
        </motion.div>
        
        <motion.p className="hero-description" variants={itemVariants}>
          {t.hero.description}
        </motion.p>
        
        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.a 
            href="#contact" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.hero.contactBtn}
          </motion.a>
          <motion.a 
            href="#projects" 
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.hero.projectsBtn}
          </motion.a>
          {/* <motion.a 
            href={language === 'es' ? '/Hoja-de-vida.pdf' : '/Curriculum-Vitae.pdf'}
            download
            className="btn btn-download"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFileDownload />
            {t.hero.downloadCV}
          </motion.a> */}
        </motion.div>
        
        <motion.div className="hero-social" variants={itemVariants}>
          <motion.a 
            href="https://github.com/LuisCW" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/luis-peraza-43a8a0126/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            href="mailto:Lugapemu98@gmail.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>
      </motion.div>
      
      <div className="hero-background">
        <div className="gradient-circle circle-1"></div>
        <div className="gradient-circle circle-2"></div>
        <div className="gradient-circle circle-3"></div>
      </div>
    </section>
  );
};

export default Hero;
