import { templates } from './templates.js';

const content = document.getElementById('content');

export async function loadPage(page) {
  try {
    const html = await templates[page]();
    content.innerHTML = html;
    history.pushState({ page }, '', `#${page}`);

    if (page === 'cadastros') {
      const script = document.createElement('script');
      script.src = 'js/form.js';
      script.type = 'module';
      document.body.appendChild(script);
    }
  } catch (err) {
    content.innerHTML = '<h3>Página não encontrada</h3>';
  }
}

document.addEventListener('click', e => {
  const link = e.target.closest('[data-page]');
  if (link) {
    e.preventDefault();
    loadPage(link.dataset.page);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const page = window.location.hash.slice(1) || 'inicio';
  loadPage(page);
});

window.addEventListener('popstate', () => {
  const page = window.location.hash.slice(1) || 'inicio';
  loadPage(page);
});