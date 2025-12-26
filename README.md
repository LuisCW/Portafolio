# 🚀 Portafolio Profesional - Luis Gabriel Peraza Muñoz

Portafolio moderno y profesional para Ingeniero de Sistemas y Desarrollador Full Stack de la Universidad Nacional de Colombia, con diseño responsive, animaciones suaves y soporte multiidioma (Español/Inglés).

[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://reactjs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.24-purple)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue)](https://lugapemu98.github.io/portafolio/)

## 🌐 Ver Demo en Vivo

**🔗 [https://lugapemu98.github.io/portafolio/](https://lugapemu98.github.io/portafolio/)**

## 👨‍💻 Sobre el Desarrollador

Soy **Luis Gabriel Peraza Muñoz**, estudiante de Ingeniería de Sistemas en la Universidad Nacional de Colombia. Desarrollador Full Stack con experiencia en:
- Desarrollo web y móvil
- Automatización y optimización de procesos
- Inteligencia Artificial y Machine Learning
- Diseño UX/UI

### 📫 Contacto
- **Email**: lugapemu98@gmail.com
- **LinkedIn**: [linkedin.com/in/lugapemu98](https://linkedin.com/in/lugapemu98)
- **GitHub**: [github.com/lugapemu98](https://github.com/lugapemu98)
- **Ubicación**: Bogotá, Colombia

## 🌍 Idiomas Disponibles

Este portafolio está completamente disponible en:
- 🇪🇸 **Español** (por defecto)
- 🇬🇧 **English**

El cambio de idioma es dinámico y afecta todas las secciones del sitio incluyendo:
- Navegación
- Presentación y biografía
- Descripciones de proyectos y experiencia
- Formulario de contacto
- Footer y mensajes del sistema

## ✨ Características

- 🎨 **Diseño Moderno**: Gradientes vibrantes, efectos glassmorphism y animaciones fluidas
- 🌐 **Multiidioma**: Soporte completo para Español e Inglés con cambio dinámico
- 📱 **Responsive**: Optimizado para móviles, tablets y escritorio
- 🎭 **Animaciones**: Transiciones suaves con Framer Motion
- 🖼️ **Carruseles**: Galería de imágenes con Slick Carousel
- 📄 **Descarga de CV**: Botón para descargar CV en ambos idiomas
- 🎯 **Modal Interactivo**: Detalle de proyectos con carrusel de imágenes

## 📋 Secciones

1. **Navegación**: Menú fijo con selector de idioma
2. **Hero**: Presentación con botones de acción y descarga de CV
3. **Sobre Mí**: Descripción profesional con áreas de especialización
4. **Habilidades**: Tecnologías organizadas por categorías (sin porcentajes)
5. **Proyectos**: 9 proyectos con carrusel de imágenes y modal detallado
6. **Experiencia**: Timeline de trayectoria profesional
7. **Contacto**: Formulario funcional e información de contacto
8. **Footer**: Pie de página con corazón animado

## 🛠️ Tecnologías

- React 19.2.0
- Framer Motion (animaciones)
- React Slick (carruseles)
- React Icons
- CSS3 con efectos modernos

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone [url-del-repo]

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

El proyecto se abrirá en [http://localhost:3000](http://localhost:3000)

## 📝 Personalización

### 1. Información Personal

Edita los siguientes archivos:

- **Hero**: `src/components/Hero.js` - Nombre, título, descripción
- **Sobre Mí**: `src/components/About.js` - Biografía y especialidades
- **Contacto**: `src/components/Contact.js` - Email, teléfono, ubicación

### 2. Proyectos

En `src/components/Projects.js`, actualiza el array `projects`:

```javascript
{
  title: 'Nombre del Proyecto',
  description: 'Descripción en español',
  images: ['url1', 'url2', 'url3'], // 3 imágenes por proyecto
  tech: ['React', 'Node.js', ...],
  github: 'https://github.com/...',
  demo: 'https://...'
}
```

### 3. Experiencia

En `src/components/Experience.js`, modifica el array `experiences`

### 4. Habilidades

En `src/components/Skills.js`, actualiza `skillCategories` con tus tecnologías

### 5. CVs

**IMPORTANTE**: Agrega tus CVs en la carpeta `public`:

- `public/cv-es.pdf` - CV en español
- `public/cv-en.pdf` - CV en inglés

Ver `CV-INSTRUCTIONS.md` para más detalles.

### 6. Traducciones

Para modificar textos en ambos idiomas, edita `src/translations.js`

### 7. Colores

Los colores principales están definidos con estos valores:
- Primario: `#667eea` (púrpura)
- Secundario: `#764ba2` (púrpura oscuro)

Para cambiarlos, busca y reemplaza en todos los archivos CSS.

## 🌐 Cambio de Idioma

El selector de idioma está en el navbar (🇪🇸 ES / 🇬🇧 EN). Todo el contenido cambia automáticamente.

## 📦 Scripts Disponibles

```bash
npm start      # Inicia desarrollo
npm build      # Compilar para producción
npm test       # Ejecutar tests
npm eject      # Eyectar configuración (irreversible)
```

## 🎨 Personalización de Estilos

Cada componente tiene su propio archivo CSS en `src/components/`:
- `Navbar.css`
- `Hero.css`
- `About.css`
- `Skills.css`
- `Projects.css`
- `Experience.css`
- `Contact.css`
- `Footer.css`

## 📱 Responsive Design

El portafolio es completamente responsive con breakpoints en:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Despliegue

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Arrastra la carpeta 'build' a Netlify
```

### GitHub Pages

```bash
npm install --save-dev gh-pages

# Agregar a package.json:
"homepage": "https://tu-usuario.github.io/portafolio",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Desplegar
npm run deploy
```

## 📄 Licencia

MIT License - Libre para uso personal y comercial

## 👤 Autor

**Luis Martínez**
- Ingeniero de Sistemas
- Desarrollador Full Stack

---

⭐ Si te gusta este proyecto, dale una estrella en GitHub!

🐛 ¿Encontraste un bug? Abre un issue

💡 ¿Tienes una sugerencia? Pull requests son bienvenidos

