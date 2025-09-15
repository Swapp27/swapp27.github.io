document.addEventListener('DOMContentLoaded', function() {
  // Section reveal animation
  const sections = document.querySelectorAll('section');
  const options = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, options);
  sections.forEach(sec => observer.observe(sec));

  // Hamburger and nav logic
  const navContainer = document.getElementById('navContainer');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navClose = document.getElementById('navClose');

  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
    navContainer.classList.toggle('menu-open', navMenu.classList.contains('show'));
  });

  navClose.addEventListener('click', function() {
    navMenu.classList.remove('show');
    navContainer.classList.remove('menu-open');
  });

  document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('show');
      navContainer.classList.remove('menu-open');
    });
  });
});
