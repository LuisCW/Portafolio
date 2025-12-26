import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, 
  FaGitAlt, FaAws, FaAngular, FaHashtag, FaCloud,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiMongodb, SiPostgresql, 
  SiMysql, SiCss3, SiDotnet, SiPhp, SiCplusplus, SiLaravel, SiTensorflow,
  SiBootstrap,
  SiFlutter,
  SiOracle,
  SiKotlin
} from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const t = translations[language];

  const skillCategories = [
    {
      category: t.skills.categories.frontend,
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Angular', icon: <FaAngular /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'CSS', icon: <SiCss3 /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> }
      ]
    },
    {
      category: t.skills.categories.backend,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Python', icon: <FaPython /> },
        { name: '.NET', icon: <SiDotnet /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'PHP', icon: <SiPhp /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'C#', icon: <FaHashtag /> },
        { name: 'Laravel', icon: <SiLaravel /> }
      ]
    },
    {
      category: t.skills.categories.mobile,
      skills: [
        { name: 'Kotlin', icon: <SiKotlin /> },
        { name: 'React Native', icon: <FaReact /> },
        { name: 'Flutter', icon: <SiFlutter /> },       
      ]
    },
    {
      category: t.skills.categories.database,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'SQL Server', icon: <FaDatabase /> },
        { name: 'Oracle DB', icon: <SiOracle /> }
      ]
    },
    {
      category: t.skills.categories.devops,
      skills: [
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Azure', icon: <FaCloud /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'TensorFlow', icon: <SiTensorflow /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="skills" className="skills" ref={ref}>
      <motion.div 
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">{t.skills.title}</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="skill-content">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
