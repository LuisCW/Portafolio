# ⚡ Configuración Rápida del Formulario de Contacto

## 🎯 Pasos para activar el formulario (2 minutos)

Tu formulario está listo para recibir mensajes en **lugapemu98@gmail.com**

### Paso 1: Obtén tu Access Key de Web3Forms

1. **Ve a:** https://web3forms.com/
2. **Ingresa tu email:** lugapemu98@gmail.com
3. **Haz clic en "Get Your Access Key"**
4. **Recibirás un email** con tu Access Key (se ve así: `a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6`)

### Paso 2: Configura el código

1. **Abre el archivo:** `src/components/Contact.js`
2. **Busca la línea 42** (aprox.) que dice:
   ```javascript
   access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
   ```
3. **Reemplaza** `YOUR_WEB3FORMS_ACCESS_KEY` con tu Access Key real:
   ```javascript
   access_key: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
   ```
4. **Guarda el archivo**

### ✅ ¡Listo!

Ahora cuando alguien envíe un mensaje desde tu portafolio:
- ✉️ Recibirás el email en lugapemu98@gmail.com
- 📱 Funciona perfectamente en GitHub Pages
- 🆓 Completamente gratis, sin límites
- 🚀 No requiere backend ni configuración adicional

---

## 🔧 Ventajas de Web3Forms

- ✅ **100% Gratis** - Sin límites de mensajes
- ✅ **Sin Backend** - Funciona directo desde GitHub Pages
- ✅ **Instantáneo** - Los emails llegan en segundos
- ✅ **Sin Spam** - Protección anti-spam incluida
- ✅ **Respuestas** - Puedes responder directamente desde tu email

---

## 📧 Qué incluye cada email que recibirás:

- **Nombre:** Quién envió el mensaje
- **Email:** Para que puedas responder
- **Asunto:** El tema del mensaje
- **Mensaje:** El contenido completo

---

## 🌐 Despliegue en GitHub Pages

El formulario funcionará automáticamente cuando despliegues en GitHub Pages.
No necesitas configuración adicional, todo está listo.

