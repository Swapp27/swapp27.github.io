document.addEventListener('DOMContentLoaded', function() {
  // Section reveal code
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

  // Navigation toggle code
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
  });

  // Hide menu on link click
  document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('show');
    });
  });
});
