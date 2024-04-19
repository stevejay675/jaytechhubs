// Toggle dark/light mode
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    // Change icon based on theme
    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark-theme')) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  });
  
  // Toggle sidebar
  document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('open');
  });
  
  // Language selection
  // Language selection
document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;
    translateContent(selectedLanguage);
  });
  
  function translateContent(language) {
    // Example translations, replace with actual translations
    const translations = {
      en: {
        home: 'Home',
        files: 'Files',
        blog: 'Blog',
        contact: 'Contact'
      },
      fr: {
        home: 'Accueil',
        files: 'Fichiers',
        blog: 'Blog',
        contact: 'Contact'
      },
      es: {
        home: 'Inicio',
        files: 'Archivos',
        blog: 'Blog',
        contact: 'Contacto'
      }
    };
  
    // Update navbar links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      const key = link.textContent.toLowerCase();
      link.textContent = translations[language][key];
    });
  }
  