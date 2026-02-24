# Sitio Estático ABM Crops

Sitio web corporativo B2B convertido de React/Vite/TypeScript a HTML estático puro.

## Estructura de Carpetas

```
/site
  /assets
    styles.css      # Estilos CSS principales
    main.js         # JavaScript mínimo (menú móvil, FAQ, scroll suave)
  index.html        # Página principal (Home)
  quienes-somos.html
  calidad.html
  sostenibilidad.html
  contacto.html
  /que-ofrecemos
    index.html      # Hub de áreas
    granel-b2b.html
    marca-blanca.html
    ecologico.html
    sin-alergenos-gluten.html
    semiprocesados.html
    legumbres-arroces.html
  sitemap.xml
  robots.txt
```

## Cómo abrir localmente

### Opción 1: Servidor HTTP simple (recomendado)

**Python 3:**
```bash
cd site
python -m http.server 8000
```
Luego abrir en el navegador: `http://localhost:8000`

**Python 2:**
```bash
cd site
python -m SimpleHTTPServer 8000
```

**Node.js (con http-server):**
```bash
npm install -g http-server
cd site
http-server -p 8000
```

**PHP:**
```bash
cd site
php -S localhost:8000
```

### Opción 2: Abrir directamente en el navegador

Puedes abrir `index.html` directamente haciendo doble clic, pero algunas funcionalidades (como el scroll suave y las anclas) pueden funcionar mejor con un servidor HTTP.

## Publicar en Hostalia

El sitio está preparado para subirse al hosting de **Hostalia** (Apache, PHP opcional).

### 1. Dónde subir los archivos

- En el **panel de Hostalia** (o por FTP/SFTP), entra en la carpeta raíz del sitio. Suele llamarse **`public_html`** o **`www`** (o la que te indique el panel para “contenido web”).
- Sube **el contenido** de la carpeta `site/`, no la carpeta `site` en sí:
  - Que en la raíz de `public_html` queden: `index.html`, `quienes-somos.html`, `calidad.html`, `.htaccess`, etc.
  - La carpeta `assets/` con `styles.css` y `main.js`.
  - La carpeta `que-ofrecemos/` con su `index2.html` y el resto de páginas.
- Incluye el archivo **`.htaccess`** (está en `site/`): define la página de inicio, UTF-8 y opciones de caché para Apache.

### 2. Cómo subir (FTP / administrador de archivos)

**Por FTP (FileZilla, WinSCP, etc.):**

1. Datos de conexión: los tienes en el panel de Hostalia (usuario FTP, contraseña, servidor, puerto 21 o 22 si es SFTP).
2. Conéctate y abre la carpeta `public_html` (o la que sea la raíz web).
3. Arrastra dentro de `public_html` todo lo que hay dentro de tu carpeta `site` (archivos y carpetas `assets`, `que-ofrecemos`).

**Por el administrador de archivos del panel:**

1. Entra en “Administrador de archivos” (o similar).
2. Navega a `public_html`.
3. Sube los archivos; si permite subir carpetas, sube `assets` y `que-ofrecemos` completas con su contenido.

### 3. Comprobar que funciona

- Abre tu dominio (ej. `https://tudominio.es`).
- Debe cargar la portada (`index.html`).
- Prueba enlaces: Quiénes somos, Qué ofrecemos, Calidad, Sostenibilidad, Contacto y las subpáginas de cada área.

### 4. Formularios en Hostalia

En hosting compartido de Hostalia no se ejecuta un backend propio. Para que los formularios envíen correos puedes:

- **Formspree**: crea un formulario en [formspree.io](https://formspree.io), copia el ID y sustituye en los HTML `YOUR_FORM_ID` por ese ID (en el `action` del `<form>`).
- **Correo por PHP** (si Hostalia permite PHP): se podría crear un `enviar.php` y apuntar el `action` del formulario a ese script; si quieres, se puede preparar un ejemplo.

### 5. Después de publicar

- En **sitemap.xml** sustituye `https://www.abmcrops.example.com` por tu dominio real (ej. `https://www.tudominio.es`).
- En **robots.txt** cambia la línea del Sitemap a tu dominio:  
  `Sitemap: https://www.tudominio.es/sitemap.xml`

---

## Publicar en otros hostings estáticos

### Netlify

1. Instala Netlify CLI: `npm install -g netlify-cli`
2. En la carpeta `site`, ejecuta: `netlify deploy`
3. Sigue las instrucciones para conectar tu cuenta
4. Para producción: `netlify deploy --prod`

**O arrastra y suelta:**
- Ve a [app.netlify.com](https://app.netlify.com)
- Arrastra la carpeta `site` a la zona de deploy
- Tu sitio estará disponible en una URL tipo `https://random-name.netlify.app`

### Vercel

1. Instala Vercel CLI: `npm install -g vercel`
2. En la carpeta `site`, ejecuta: `vercel`
3. Sigue las instrucciones

**O desde GitHub:**
- Sube el proyecto a GitHub
- Conecta tu repositorio en [vercel.com](https://vercel.com)
- Vercel detectará automáticamente que es un sitio estático

### GitHub Pages

1. Crea un repositorio en GitHub
2. Sube la carpeta `site` al repositorio
3. Ve a Settings > Pages
4. Selecciona la rama `main` y la carpeta `/site` (o `/root` si pusiste los archivos en la raíz)
5. Tu sitio estará disponible en `https://tu-usuario.github.io/nombre-repo`

### Otros servicios

- **Cloudflare Pages**: Conecta tu repositorio Git o sube los archivos manualmente
- **AWS S3 + CloudFront**: Sube los archivos a un bucket S3 y configura CloudFront
- **Firebase Hosting**: `firebase init hosting` y luego `firebase deploy`

## Configurar formularios

Los formularios están configurados con placeholders para **Formspree** o **Netlify Forms**.

### Formspree

1. Ve a [formspree.io](https://formspree.io) y crea una cuenta
2. Crea un nuevo formulario
3. Copia el ID del formulario (ejemplo: `YOUR_FORM_ID`)
4. Reemplaza `YOUR_FORM_ID` en todos los archivos HTML:
   - Busca: `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Reemplaza con tu ID real

### Netlify Forms

Si usas Netlify, simplemente agrega `netlify` al tag `<form>`:
```html
<form action="/" method="POST" netlify>
```

Netlify procesará automáticamente los formularios sin configuración adicional.

## Personalización

### Cambiar colores

Edita las variables CSS en `assets/styles.css`:
```css
:root {
  --primary: #2563eb;      /* Color principal */
  --secondary: #7c3aed;   /* Color secundario */
  --foreground: #1e293b;  /* Color de texto oscuro */
  --background: #ffffff;   /* Color de fondo */
  /* ... */
}
```

### Actualizar contenido

Todos los archivos HTML están en la raíz de `site` o en `que-ofrecemos/`. Edita directamente los archivos HTML para cambiar textos, imágenes, etc.

### Agregar imágenes

1. Coloca las imágenes en `assets/images/`
2. Actualiza las rutas en los HTML: `src="assets/images/nombre-imagen.jpg"`

## Características implementadas

✅ HTML semántico (header/main/footer, section, nav, etc.)
✅ CSS responsive (desktop/tablet/móvil) con Flex/Grid
✅ JavaScript mínimo sin librerías
✅ Menú móvil hamburguesa
✅ FAQ accordion
✅ Scroll suave para anclas
✅ Formularios con checkbox RGPD
✅ Enlaces externos marcados como "(sitio externo)"
✅ Lazy loading de imágenes
✅ Accesibilidad básica (labels, focus visible, aria-label)

## Notas importantes

- Los KPIs y certificaciones muestran "Pendiente de confirmar" según lo solicitado
- Los formularios tienen placeholders para ReCAPTCHA/hCaptcha
- Los enlaces externos a Don José y DMondo abren en nueva pestaña con indicador "(sitio externo)"
- Las imágenes de fondo están como placeholders (divs vacíos) - reemplázalas con imágenes reales cuando las tengas
- El sitemap.xml usa un dominio de ejemplo - actualízalo con tu dominio real antes de publicar

## Soporte

Para cualquier duda sobre la estructura o funcionalidad, revisa los comentarios en el código HTML/CSS/JS.
