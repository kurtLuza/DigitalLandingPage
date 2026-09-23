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

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    formStatus.textContent = 'Please fill in your name, email, service, and message.';
    formStatus.dataset.state = 'error';
    contactForm.reportValidity();
    return;
  }

  const submitButton = contactForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  formStatus.textContent = 'Sending...';
  formStatus.dataset.state = '';

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(contactForm),
    });
    const result = await response.json();

    if (result.success) {
      formStatus.textContent = "Thanks — we'll get back to you within one business day.";
      formStatus.dataset.state = 'success';
      contactForm.reset();
    } else {
      formStatus.textContent = 'Something went wrong sending your message. Please email us directly.';
      formStatus.dataset.state = 'error';
    }
  } catch {
    formStatus.textContent = 'Something went wrong sending your message. Please email us directly.';
    formStatus.dataset.state = 'error';
  } finally {
    submitButton.disabled = false;
  }
});
