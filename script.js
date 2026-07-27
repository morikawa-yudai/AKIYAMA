const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('.global-nav');

button?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
});

nav?.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    nav.classList.remove('open');
    button?.setAttribute('aria-expanded', 'false');
  }
});

const revealTargets = document.querySelectorAll(
  '.section-title, .reason-card, .proof article, .service-grid article, .service-note, .flow-path li, .work-grid article, .link-clouds article, .contact-cloud'
);

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealTargets.forEach((element) => element.classList.add('reveal'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px' });
  revealTargets.forEach((element) => observer.observe(element));
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    nav?.classList.remove('open');
    button?.setAttribute('aria-expanded', 'false');
  }
});
