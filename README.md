# ABM Crops – Sitio web corporativo B2B

Sitio estático (HTML, CSS, JavaScript) para el holding ABM Crops: presentación corporativa, áreas de negocio, calidad, sostenibilidad y contacto. Pensado para funcionar en cualquier hosting estático y en **GitHub Pages** con rutas relativas.

## Estructura del proyecto

```
/
  index.html              # Inicio
  quienes-somos.html
  calidad.html
  sostenibilidad.html
  contacto.html
  gracias.html            # Confirmación tras enviar formularios
  aviso-legal.html
  politica-privacidad.html
  politica-cookies.html
  condiciones-generales.html
  sitemap.xml
  robots.txt
  .htaccess               # Opcional (Apache)

  /css
    styles.css            # Estilos globales

  /js
    main.js               # Menú móvil, FAQ, formularios, toasts

  /assets
    /logos                # Logos (ABM Crops, Don José, DMondo)
    /icons                # Iconos SVG
    /images               # Imágenes de fondo (hero, calidad, sostenibilidad)

  /que-ofrecemos
    index2.html           # Hub de áreas
    granel-b2b.html
    marca-blanca.html
    ecologico.html
    sin-alergenos-gluten.html
    semiprocesados.html
    legumbres-arroces.html
```

## Cómo abrir en local

### Con un servidor HTTP (recomendado)

**Python 3:**
```bash
python -m http.server 8000
```
Abre en el navegador: `http://localhost:8000`

**PHP:**
```bash
php -S localhost:8000
```

**Node (http-server):**
```bash
npx http-server -p 8000
```

### Sin servidor

Puedes abrir `index.html` directamente; las rutas son relativas y deberían funcionar. Para probar en una subruta (ej. GitHub Pages con repo como subcarpeta) es mejor usar un servidor local.

## Publicar en Hostalia u otro hosting

- Sube **todo el contenido** de la raíz del proyecto a la carpeta web (p. ej. `public_html`): los `.html`, las carpetas `css/`, `js/`, `assets/` y `que-ofrecemos/`.
- Incluye `sitemap.xml`, `robots.txt` y, si usas Apache, `.htaccess`.
- En **sitemap.xml** y **robots.txt** sustituye `https://www.abmcrops.example.com` por tu dominio real.

## Formularios

- Todos los formularios tienen **novalidate** y validación en JavaScript con mensajes tipo toast.
- Tras envío correcto se redirige a **gracias.html** (y desde ahí a inicio a los 5 segundos).
- Para que los envíos lleguen por email, configura **Formspree**:
  1. Crea un formulario en [formspree.io](https://formspree.io).
  2. Sustituye `YOUR_FORM_ID` en el `action` de cada `<form>` por el ID que te da Formspree.

Ejemplo:  
`action="https://formspree.io/f/YOUR_FORM_ID"` → `action="https://formspree.io/f/xxxxxxxx"`

## Páginas legales

- **Aviso Legal**, **Política de Privacidad (RGPD)**, **Política de Cookies** y **Condiciones Generales** tienen página propia con texto placeholder.
- Los enlaces del footer apuntan a: `aviso-legal.html`, `politica-privacidad.html`, `politica-cookies.html`, `condiciones-generales.html` (desde la raíz) o `../aviso-legal.html`, etc. (desde `que-ofrecemos/`).
- Sustituye el contenido de cada página por los textos legales definitivos (con asesoría jurídica si aplica).

## Personalización

- **Colores y estilos:** en `css/styles.css` (variables `:root`, clases de secciones, botones, etc.).
- **Textos e imágenes:** edita los HTML y las rutas a imágenes en `assets/images/`, `assets/logos/`, `assets/icons/`.
- **Dominio:** al tener el dominio final, actualiza la URL base en `sitemap.xml` y en la línea `Sitemap` de `robots.txt`.

## Qué incluye el sitio

- Estructura pensada para un **holding** (una web corporativa con varias áreas/marcas).
- Diseño responsive (móvil, tablet, escritorio) con estética industrial/corporativa (verde, fondos suaves).
- Menú móvil, acordeón de FAQ, scroll suave a anclas.
- Formularios con validación, toasts y redirección a página de agradecimiento.
- Mapa (Google Maps) en Contacto con enlace “Abrir en Google Maps”.
- Rutas relativas para **index** y resto de páginas (compatible con GitHub Pages y subcarpetas).
- Páginas legales enlazadas desde el footer.
- Favicon y referencias a logos en `assets/logos/`.

## Pendiente de configurar con datos reales

- **Formspree:** reemplazar `YOUR_FORM_ID` en todos los formularios.
- **Email y enlaces:** `ventas@abmcrops.example.com`, `donjose.example.com`, `dmondo.example.com` por los definitivos.
- **SEO:** dominio real en `robots.txt` y `sitemap.xml`.
- **Legal:** sustituir el texto placeholder de las cuatro páginas legales por el contenido final.
- **ReCAPTCHA/hCaptcha:** sustituir el placeholder en los formularios por el widget real si se desea.

## Notas técnicas

- No se usa Node ni `package.json`; el proyecto es solo HTML/CSS/JS estático.
- `.gitignore` incluye `node_modules`, `dist`, `.local`, etc.
- Los enlaces a inicio usan `index.html` o `../index.html` (nunca `href="/"`) para que funcione en GitHub Pages y en subcarpetas.
