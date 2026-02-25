// Menú móvil
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const applyHeaderScrollState = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  applyHeaderScrollState();
  window.addEventListener('scroll', applyHeaderScrollState, { passive: true });

  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
      const icon = menuToggle.querySelector('svg');
      if (icon) {
        const isOpen = mobileMenu.classList.contains('open');
        menuToggle.setAttribute('aria-expanded', isOpen);
      }
    });
    
    // Cerrar menú al hacer clic en un enlace
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  
  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function() {
        const isActive = item.classList.contains('active');
        // Cerrar todos los demás
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        // Toggle el actual
        item.classList.toggle('active', !isActive);
      });
    }
  });
  
  // Scroll suave para anclas
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Lazy loading de imágenes
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback para navegadores sin IntersectionObserver
    lazyImages.forEach(img => img.classList.add('loaded'));
  }
  
  // Marcar página activa en navegación
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a, .mobile-menu a');
  navLinks.forEach(link => {
    const linkPath = new URL(link.href, window.location.origin).pathname;
    if (linkPath === currentPath || (currentPath === '/' && linkPath === '/index.html')) {
      link.classList.add('active');
    }
  });

  // Año dinámico en footer
  const currentYearEl = document.getElementById('current-year');
  if (currentYearEl) {
    currentYearEl.textContent = String(new Date().getFullYear());
  }

  // Toasts y validación de formularios (como en contacto)
  window.showToast = function(title, description, type) {
    type = type || 'success';
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    const iconSvg = type === 'success'
      ? '<svg class="toast-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: #447854;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
      : '<svg class="toast-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: #dc2626;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
    toast.innerHTML = iconSvg +
      '<div class="toast-content"><div class="toast-title">' + title + '</div><div class="toast-description">' + description + '</div></div>' +
      '<button class="toast-close" type="button"><svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>';
    toast.querySelector('.toast-close').addEventListener('click', function() { toast.remove(); });
    container.appendChild(toast);
    setTimeout(function() {
      toast.style.animation = 'slideIn 0.3s ease-out reverse';
      setTimeout(function() { toast.remove(); }, 300);
    }, 5000);
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  document.querySelectorAll('form[novalidate]').forEach(function(form) {
    if (!form.action || form.action.indexOf('formspree') === -1) return;
    if (form.id === 'contact-form') return;
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var required = form.querySelectorAll('[required]');
      var valid = true;
      for (var i = 0; i < required.length; i++) {
        var el = required[i];
        if (el.type === 'checkbox') {
          if (!el.checked) { valid = false; break; }
        } else if (el.type === 'email') {
          if (!emailRegex.test((el.value || '').trim())) {
            if (typeof showToast === 'function') showToast('Error', 'Por favor, ingrese un email válido.', 'error');
            return;
          }
        } else {
          if ((el.value || '').trim() === '') { valid = false; break; }
        }
      }
      if (!valid) {
        if (typeof showToast === 'function') showToast('Error', 'Por favor, complete todos los campos obligatorios.', 'error');
        return;
      }
      var submitBtn = form.querySelector('button[type=submit]');
      var originalText = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add('btn-loading');
        submitBtn.textContent = 'Enviando...';
      }
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function(response) {
        if (response.ok) {
          if (typeof showToast === 'function') showToast('Mensaje enviado', 'Nos pondremos en contacto con usted lo antes posible.', 'success');
          form.reset();
          var fromSub = window.location.pathname.indexOf('que-ofrecemos') !== -1;
          window.location.href = (fromSub ? '../' : '') + 'gracias.html';
        } else throw new Error('Error al enviar');
      }).catch(function() {
        if (typeof showToast === 'function') showToast('Error', 'Hubo un problema al enviar. Por favor, inténtelo de nuevo.', 'error');
      }).finally(function() {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.classList.remove('btn-loading');
          submitBtn.textContent = originalText;
        }
      });
    });
  });
});
