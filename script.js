// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    formStatus.textContent = 'Please fill in your name, email, service, and message.';
    formStatus.dataset.state = 'error';
    contactForm.reportValidity();
    return;
  }

  // TODO: replace with a real submission endpoint (e.g. Formspree, a
  // serverless function, or your own backend) before going live.
  formStatus.textContent = "Thanks — we'll get back to you within one business day.";
  formStatus.dataset.state = 'success';
  contactForm.reset();
});
