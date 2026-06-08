// Odoo Clone — Mobile-first

document.addEventListener('DOMContentLoaded', function() {

  var toggle = document.getElementById('mobileToggle');
  var menu = document.getElementById('mobileMenu');

  // Mobile menu toggle
  if (toggle && menu) {
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      menu.classList.toggle('open');
      toggle.innerHTML = menu.classList.contains('open') ? '&#10005;' : '&#9776;';
    });

    // Close on link click
    menu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        menu.classList.remove('open');
        toggle.innerHTML = '&#9776;';
      });
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
      if (!menu.contains(e.target) && e.target !== toggle) {
        menu.classList.remove('open');
        toggle.innerHTML = '&#9776;';
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Scroll animations
  setTimeout(function() {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('o_animate_in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.o_animate').forEach(function(el) {
      observer.observe(el);
    });
  }, 300);
});
