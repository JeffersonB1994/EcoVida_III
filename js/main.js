import { loadPage } from './spa.js';
window.loadPage = loadPage;

// Função para menu mobile
window.toggleMenu = () => {
  document.getElementById('navMenu').classList.toggle('active');
};