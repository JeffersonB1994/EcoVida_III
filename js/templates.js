// js/templates.js - VERSÃO CORRIGIDA COM FETCH
export const templates = {
  inicio: async () => {
    const res = await fetch('pages/inicio.html');
    return await res.text();
  },
  projetos: async () => {
    const res = await fetch('pages/projetos.html');
    return await res.text();
  },
  cadastros: async () => {
    const res = await fetch('pages/cadastros.html');
    return await res.text();
  }
};
