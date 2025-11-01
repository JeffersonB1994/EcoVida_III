export const templates = {
  inicio: () => import('../pages/inicio.html').then(m => m.default),
  projetos: () => import('../pages/projetos.html').then(m => m.default),
  cadastros: () => import('../pages/cadastros.html').then(m => m.default)
};