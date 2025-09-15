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
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
    document.body.classList.toggle('menu-open', navMenu.classList.contains('show'));
  });

  document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('show');
      document.body.classList.remove('menu-open');
    });
  });
});
