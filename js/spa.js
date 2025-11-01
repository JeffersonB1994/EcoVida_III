// js/spa.js
import { templates } from './templates.js';

const content = document.getElementById('content');

export async function loadPage(page) {
  try {
    const html = await templates[page]();
    content.innerHTML = html;
    history.pushState({ page }, '', `#${page}`);

    // Carrega formulário apenas na página de cadastros
    if (page === 'cadastros') {
      import('./form.js');
    }
  } catch (err) {
    console.error(err);
    content.innerHTML = '<h3 style="text-align:center; padding:2rem; background:#fff; border-radius:8px;">Página não encontrada</h3>';
  }
}

// Navegação
document.addEventListener('click', e => {
  const link = e.target.closest('[data-page]');
  if (link) {
    e.preventDefault();
    loadPage(link.dataset.page);
  }
});

// Inicialização
window.addEventListener('DOMContentLoaded', () => {
  const page = window.location.hash.slice(1) || 'inicio';
  loadPage(page);
});

window.addEventListener('popstate', () => {
  const page = window.location.hash.slice(1) || 'inicio';
  loadPage(page);
});
