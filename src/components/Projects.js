import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      title: language === 'es' ? 'Graphyra' : 'Graphyra',
      description: language === 'es'
        ? 'Proyecto personal de plataforma educativa, con la publicacion de articulos cientificos para todos, una revista digital y la creacion de una comunidad academica donde todos pueden participar, además de la creacion de una academia y una biblioteca para tener los mejores articulos cientificos en un solo lugar.'
        : 'Personal project of an educational platform, with the publication of scientific articles for everyone, a digital magazine and the creation of an academic community where everyone can participate, in addition to the creation of an academy and a library to have the best scientific articles in one place.',
      images: [
        `${process.env.PUBLIC_URL}/images/graphyra1.png`,
        `${process.env.PUBLIC_URL}/images/graphyra2.png`,
        `${process.env.PUBLIC_URL}/images/graphyra3.png`,
        `${process.env.PUBLIC_URL}/images/graphyra4.png`,
        `${process.env.PUBLIC_URL}/images/graphyra5.png`,
        `${process.env.PUBLIC_URL}/images/graphyra6.png`,
        `${process.env.PUBLIC_URL}/images/graphyra7.png`,
        `${process.env.PUBLIC_URL}/images/graphyra8.png`,
        `${process.env.PUBLIC_URL}/images/graphyra9.png`,
        `${process.env.PUBLIC_URL}/images/graphyra10.png`,
        `${process.env.PUBLIC_URL}/images/graphyra11.png`,
        `${process.env.PUBLIC_URL}/images/graphyra12.png`,
        `${process.env.PUBLIC_URL}/images/graphyra13.png`
      ],
      tech: ['React.js', 'Nest.js', 'Node.js', 'Java', 'Springboot', 'Python', 'Pandas', 'NumPy', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
      github: 'https://github.com/LuisCW/Graphyra',
      demo: 'https://graphyra.com/'
    },
    {
      title: language === 'es' ? 'Plataforma de Comercio Electrónico' : 'E-Commerce Platform',
      description: language === 'es' 
        ? 'Plataforma completa de comercio electrónico para venta de computadoras con pasarela de pago integrada y panel de control para gestión y análisis de ventas y clientes.'
        : 'Complete e-commerce platform for computer sales with integrated payment gateway and control panel for sales and customer management and analytics.',
      images: [
        `${process.env.PUBLIC_URL}/images/e_commerce1.png`,     
        `${process.env.PUBLIC_URL}/images/e_commerce2.png`,
        `${process.env.PUBLIC_URL}/images/e_commerce3.png`,
        `${process.env.PUBLIC_URL}/images/e_commerce4.png`,
        `${process.env.PUBLIC_URL}/images/e_commerce5.png`,
      ],
      tech: ['C#','.Net', 'JavaScript', 'Bootstrap','PostgreSQL', 'Azure'],
      github: 'https://github.com/LuisCW/ComputerStore',
      demo: 'https://compuhipermegaredcol.azurewebsites.net/'
    },
    {
      title: language === 'es' ? 'Automatización de Excel con OCR' : 'Excel Automation with OCR',
      description: language === 'es'
        ? 'Aplicación para automatizar procesos en Excel mediante reconocimiento óptico de caracteres (OCR) de imágenes, facilitando la entrada de datos.'
        : 'Application to automate Excel processes through Optical Character Recognition (OCR) from images, facilitating data entry.',
      images: [
        `${process.env.PUBLIC_URL}/images/excel1.png`,
        `${process.env.PUBLIC_URL}/images/excel2.png`,
        `${process.env.PUBLIC_URL}/images/excel3.png`,
        `${process.env.PUBLIC_URL}/images/excel4.png`,
        `${process.env.PUBLIC_URL}/images/excel5.png`
      ],
      tech: ['Python', 'OCR', 'Excel API', 'TensorFlow', 'OpenCV', 'PyQt', 'Pandas', 'NumPy', 'Tesseract', 'EasyOCR'],
      github: 'https://github.com/LuisCW/Excel-AI',
      demo: 'https://drive.google.com/drive/u/2/folders/1RqRg_Bn5b81b25zRdGkmWBsZgafBlKVY'
    },
    {
      title: language === 'es' ? 'Escáner de Texto con OCR' : 'Text Scanner with OCR',
      description: language === 'es'
        ? 'Aplicación móvil para escanear texto manuscrito desde fotos tomadas con el celular y convertirlo a texto digital, ideal para notas y documentos.'
        : 'Mobile app to scan handwritten text from phone photos and convert it to digital text, ideal for notes and documents.',
      images: [
        `${process.env.PUBLIC_URL}/images/OCR1.jpeg`,
        `${process.env.PUBLIC_URL}/images/OCR2.jpeg`,
        `${process.env.PUBLIC_URL}/images/OCR3.jpeg`,
        `${process.env.PUBLIC_URL}/images/OCR4.jpeg`,
        `${process.env.PUBLIC_URL}/images/OCR5.jpeg`, 
        `${process.env.PUBLIC_URL}/images/OCR6.jpeg`
      ],
      tech: ['React Native', 'Python', 'OCR', 'TensorFlow', 'Firebase', 'AWS Lambda', 'Tesseract', 'EasyOCR'],
      github: 'https://github.com/LuisCW/OCR_Escaner_Texto',
      demo: 'https://drive.google.com/drive/u/2/folders/12_LVmSr-nlj09ltqwIIbYOFTh8Qcx1Fd'
    },
    {
      title: language === 'es' ? 'App del Clima' : 'Weather App',
      description: language === 'es'
        ? 'Aplicación móvil y web del clima con pronósticos en tiempo real, alertas meteorológicas y visualización de datos históricos.'
        : 'Mobile and web weather application with real-time forecasts, weather alerts and historical data visualization.',
      images: [
        `${process.env.PUBLIC_URL}/images/weather1.png`,
        `${process.env.PUBLIC_URL}/images/weather2.png`,
        `${process.env.PUBLIC_URL}/images/weather3.png`,
        `${process.env.PUBLIC_URL}/images/weather4.png`
      ],
      tech: ['Angular', 'OpenWeatherMap API', 'Node.js', 'Typescript', 'Bootstrap', 'Dart', 'Flutter', 'AWS'],
      github: 'https://github.com/LuisCW/weather-app',
      demo: [
        { url: 'http://weather-app-pro.s3-website.us-east-2.amazonaws.com/', label: language === 'es' ? 'Demo Web' : 'Web Demo' },
        { url: 'https://drive.google.com/drive/u/2/folders/1F6k16nggpThqUdTQdM4aHNnGhWMCQCJv', label: language === 'es' ? 'Demo App' : 'App Demo' }
      ]
    },
    {
      title: language === 'es' ? 'Ajedrez con IA' : 'Chess with AI',
      description: language === 'es'
        ? 'Juego de ajedrez con inteligencia artificial y redes neuronales, la IA se entrena y puede aprender del jugador humano en cada partida.'
        : 'Chess game with artificial intelligence and neural networks, the AI trains and can learn from the human player in each match.',
      images: [
        `${process.env.PUBLIC_URL}/images/chess1.png`,
        `${process.env.PUBLIC_URL}/images/chess2.png`,
        `${process.env.PUBLIC_URL}/images/chess3.png`,
        `${process.env.PUBLIC_URL}/images/chess4.png`
      ],
      tech: ['Java', 'Python', 'Neural Networks', 'TensorFlow', 'Keras', 'JMonkeyEngine', 'Pandas', 'NumPy'],
      github: 'https://github.com/LuisCW/Ajedrez_IA',
      demo: '#https://drive.google.com/drive/u/2/folders/1NfO9hQspTmQmtJbs-6aNMM32xr3GEAaR'
    },
    {
      title: language === 'es' ? 'Sitio Web de Restaurante Italino con sistema de reservas ' : 'Italian Restaurant Website with Reservation System',
      description: language === 'es'
        ? 'Restaurante italiano con menú interactivo, sistema de reservas en línea y galería de imágenes no solo de los platos sino de su historia y la de Italia para una experiencia completa.'
        : 'Italian restaurant with interactive menu, online reservation system, and image gallery not only of the dishes but also of its history and that of Italy for a complete experience.',
      images: [
        `${process.env.PUBLIC_URL}/images/restaurant1.png`,
        `${process.env.PUBLIC_URL}/images/restaurant2.png`,
        `${process.env.PUBLIC_URL}/images/restaurant3.png`,
        `${process.env.PUBLIC_URL}/images/restaurant4.png`,
        `${process.env.PUBLIC_URL}/images/restaurant5.png`,
        `${process.env.PUBLIC_URL}/images/restaurant6.png`,
        `${process.env.PUBLIC_URL}/images/restaurant7.png`,
        `${process.env.PUBLIC_URL}/images/restaurant8.png`,
        `${process.env.PUBLIC_URL}/images/restaurant9.png`,
        `${process.env.PUBLIC_URL}/images/restaurant10.png`,
        `${process.env.PUBLIC_URL}/images/restaurant11.png`,
        `${process.env.PUBLIC_URL}/images/restaurant12.png`
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'Boostrap', 'AWS'],
      github: 'https://github.com/LuisCW/Italian_Restaurant',
      demo: 'https://trattoria-bella-italia-web.s3-website.us-east-2.amazonaws.com/'
    },
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

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  const modalCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <FaChevronRight />,
    prevArrow: <FaChevronLeft />
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="projects" className="projects" ref={ref}>
        <motion.div 
          className="projects-container"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">{t.projects.title}</h2>
            <div className="section-line"></div>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <Slider {...carouselSettings}>
                    {project.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="carousel-slide">
                        <img src={image} alt={`${project.title} ${imgIndex + 1}`} />
                      </div>
                    ))}
                  </Slider>
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title={t.projects.viewCode}
                      >
                        <FaGithub />
                      </motion.a>
                      {Array.isArray(project.demo)
                        ? project.demo.map((demo, i) => (
                            <motion.a
                              key={i}
                              href={demo.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              title={demo.label}
                            >
                              <FaExternalLinkAlt />
                            </motion.a>
                          ))
                        : (
                            <motion.a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              title={t.projects.viewDemo}
                            >
                              <FaExternalLinkAlt />
                            </motion.a>
                          )
                      }
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <motion.button
                    className="btn-details"
                    onClick={() => openModal(project)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t.projects.viewDetails}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
              
              <div className="modal-carousel">
                <Slider {...modalCarouselSettings}>
                  {selectedProject.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="modal-slide">
                      <img src={image} alt={`${selectedProject.title} ${imgIndex + 1}`} />
                    </div>
                  ))}
                </Slider>
              </div>

              <div className="modal-info">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>
                <div className="modal-tech">
                  {selectedProject.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="modal-links">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> {t.projects.viewCode}
                  </motion.a>
                  {Array.isArray(selectedProject.demo)
                    ? selectedProject.demo.map((demo, i) => (
                        <motion.a
                          key={i}
                          href={demo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt /> {demo.label}
                        </motion.a>
                      ))
                    : (
                        <motion.a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt /> {t.projects.viewDemo}
                        </motion.a>
                      )
                  }
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
