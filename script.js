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
