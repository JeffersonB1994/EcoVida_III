import { loadPage } from './spa.js';
window.loadPage = loadPage;

// Menu mobile
window.toggleMenu = () => {
  document.getElementById('navMenu').classList.toggle('active');
};
