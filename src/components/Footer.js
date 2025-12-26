import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          {t.footer.designed}  {t.footer.by}
        </p>
        <p className="copyright">
          © {currentYear} {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
