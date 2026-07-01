/* ==========================================
   TUNÇ ELEKTRONİK - JAVASCRIPT
   Dark/Light Theme Toggle & Interactions
   ========================================== */

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Theme preference'ı localStorage'dan kontrol et
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  enableDarkMode();
}

function enableDarkMode() {
  htmlElement.classList.add('dark-mode');
  document.body.classList.add('dark-mode');

  // Tüm sayfalardaki bölümleri dark mode'a al
  document.querySelectorAll('header, .hero, .page-hero, .video-section, .demo-video-section, .features, .panasonic-spotlight, .process-section, .portfolio-section, .testimonials-section, .products-section, .about-section, .contact-section').forEach(el => {
    el.classList.add('dark-mode');
  });

  themeToggle.innerHTML = '☀️';
  localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
  htmlElement.classList.remove('dark-mode');
  document.body.classList.remove('dark-mode');

  document.querySelectorAll('header, .hero, .page-hero, .video-section, .demo-video-section, .features, .panasonic-spotlight, .process-section, .portfolio-section, .testimonials-section, .products-section, .about-section, .contact-section').forEach(el => {
    el.classList.remove('dark-mode');
  });

  themeToggle.innerHTML = '🌙';
  localStorage.setItem('theme', 'light');
}

// Theme toggle event listener
themeToggle.addEventListener('click', function() {
  if (htmlElement.classList.contains('dark-mode')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    
    // Hamburger animasyonu
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(span => span.style.transition = 'all 0.3s ease');
  });

  // Menu dışına tıklandığında kapat
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.navbar')) {
      navMenu.classList.remove('active');
    }
  });

  // Nav linkine tıklandığında kapat
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
    });
  });
}

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form verilerini al
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };
    
    // Validasyon kontrol et
    if (!formData.name || !formData.email || !formData.message) {
      alert('Lütfen zorunlu alanları doldurunuz!');
      return;
    }
    
    // Email validasyonu
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Lütfen geçerli bir email adresi girin!');
      return;
    }
    
    // İleride backend entegrasyonu için hazır
    console.log('Form Data:', formData);
    
    // Başarı mesajı göster
    alert('Mesajınız alındı! En kısa sürede sizinle iletişime geçeceğiz.');
    contactForm.reset();
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Page load animation
window.addEventListener('load', function() {
  document.body.style.opacity = '1';
});

// Lazy load images (basit implementasyon)
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img').forEach(img => {
    imageObserver.observe(img);
  });
}

// Scroll to top button (optional)
const scrollTopBtn = document.getElementById('scroll-top-btn');
if (scrollTopBtn) {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });

  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Initialize theme icon
window.addEventListener('DOMContentLoaded', function() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    themeToggle.innerHTML = '☀️';
  } else {
    themeToggle.innerHTML = '🌙';
  }
});
