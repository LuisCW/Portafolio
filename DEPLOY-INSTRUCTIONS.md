# 📦 Instrucciones para Subir a GitHub y Desplegar

## ✅ Completado

1. ✅ Proyecto inicializado con Git
2. ✅ README.md actualizado con información completa del portafolio
3. ✅ Package.json configurado para GitHub Pages
4. ✅ Dependencia gh-pages instalada
5. ✅ Primer commit creado

## 🚀 Pasos Siguientes

### 1. Crear Repositorio en GitHub

1. Ve a [https://github.com/new](https://github.com/new)
2. Configura el repositorio:
   - **Repository name**: `portafolio`
   - **Description**: "Portafolio profesional - Ingeniero de Sistemas Full Stack"
   - **Visibility**: Public (para GitHub Pages gratuito)
   - **NO** marques "Initialize this repository with a README"
   - **NO** agregues .gitignore ni license (ya los tienes localmente)
3. Clic en **"Create repository"**

### 2. Conectar y Subir el Código

Ejecuta estos comandos en tu terminal:

```powershell
# Cambiar el nombre de la rama a 'main' (GitHub usa 'main' por defecto)
git branch -M main

# Conectar con tu repositorio en GitHub (reemplaza 'lugapemu98' con tu usuario si es diferente)
git remote add origin https://github.com/lugapemu98/portafolio.git

# Subir el código a GitHub
git push -u origin main
```

### 3. Desplegar en GitHub Pages

Una vez subido el código, ejecuta:

```powershell
# Este comando construye el proyecto y lo despliega automáticamente
npm run deploy
```

Este comando:
- Construye tu aplicación React (`npm run build`)
- Crea una rama `gh-pages` con los archivos estáticos
- Los sube automáticamente a GitHub

### 4. Configurar GitHub Pages (si es necesario)

1. Ve a tu repositorio en GitHub
2. Settings → Pages (en el menú izquierdo)
3. En "Source", debe estar seleccionado:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Guarda los cambios

**¡Tu sitio estará disponible en aproximadamente 2-3 minutos!**

### 🌐 URL de tu Portafolio

```
https://lugapemu98.github.io/portafolio/
```

## 🔄 Actualizaciones Futuras

Cada vez que hagas cambios:

```powershell
# 1. Guardar cambios
git add .
git commit -m "Descripción de los cambios"

# 2. Subir a GitHub
git push origin main

# 3. Actualizar el sitio web
npm run deploy
```

## 📝 Verificación

Después del despliegue, verifica:

1. ✅ El sitio web funciona en la URL de GitHub Pages
2. ✅ El cambio de idioma funciona correctamente
3. ✅ El formulario de contacto envía emails
4. ✅ Los CVs se pueden descargar
5. ✅ Las imágenes de los proyectos cargan correctamente
6. ✅ El diseño responsive funciona en móvil

## 🎨 Personalización Adicional

Si quieres un dominio personalizado:

1. En GitHub: Settings → Pages → Custom domain
2. Ingresa tu dominio (ej: `luisperaza.com`)
3. Configura el DNS de tu dominio apuntando a GitHub

## 🐛 Solución de Problemas

### El sitio no carga

- Verifica que la rama `gh-pages` exista en GitHub
- Espera 2-3 minutos después del deploy
- Limpia caché del navegador (Ctrl + F5)

### Las rutas no funcionan

- Asegúrate de que `homepage` en package.json sea correcto
- Usa HashRouter en lugar de BrowserRouter si tienes problemas

### Las imágenes no cargan

- Verifica que las rutas sean relativas desde `/public`
- Usa `process.env.PUBLIC_URL` para rutas absolutas

## 📧 Contacto

Si necesitas ayuda:
- Email: lugapemu98@gmail.com
- GitHub Issues: https://github.com/lugapemu98/portafolio/issues

---

**¡Listo para desplegar! 🚀**
