import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Enviar email usando Web3Forms (funciona en GitHub Pages)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'd181dd87-2cc1-4807-88b4-c68de757447c',
          from_name: formData.name,
          email: formData.email,
          subject: `Mensaje de portafolio: ${formData.subject}`,
          message: formData.message,
          to_email: 'lugapemu98@gmail.com'
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: t.contact.form.success 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: language === 'es' 
          ? 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctame directamente por email.' 
          : 'There was an error sending the message. Please try again or contact me directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: t.contact.email,
      value: 'Lugapemu98@gmail.com',
      link: 'mailto:Lugapemu98@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: t.contact.phone,
      value: '+57 311 549 1733',
      link: 'tel:+573115491733'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: t.contact.location,
      value: language === 'es' ? 'Colombia' : 'Colombia',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/luis-peraza-43a8a0126/'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      link: 'https://github.com/LuisCW'
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
    <section id="contact" className="contact" ref={ref}>
      <motion.div 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info-section" variants={itemVariants}>
            <h3>{t.contact.info}</h3>
            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-info-item"
                  whileHover={{ x: 10 }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div>
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.value}</a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-links">
              <h4>{t.contact.followMe}</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t.contact.form.name}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t.contact.form.email}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder={t.contact.form.subject}
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder={t.contact.form.message}
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {submitStatus.message && (
              <motion.div 
                className={`form-status ${submitStatus.type}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {submitStatus.message}
              </motion.div>
            )}

            <motion.button
              type="submit"
              className="btn btn-submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? (language === 'es' ? 'Enviando...' : 'Sending...') : t.contact.form.send}</span>
              <FaPaperPlane />
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
