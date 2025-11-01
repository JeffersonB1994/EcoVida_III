import { saveCadastro } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastroForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (validate()) {
      const data = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        tipo: document.getElementById('tipo').value,
        data: new Date().toLocaleString()
      };
      saveCadastro(data);
      showResult('Cadastro realizado com sucesso!', 'success');
      form.reset();
    }
  });
});

function validate() {
  let valid = true;

  // Nome
  const nome = document.getElementById('nome').value.trim();
  const nomeError = document.getElementById('nomeError');
  if (!nome) {
    nomeError.classList.add('show');
    valid = false;
  } else {
    nomeError.classList.remove('show');
  }

  // Email
  const email = document.getElementById('email').value.trim();
  const emailError = document.getElementById('emailError');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.classList.add('show');
    valid = false;
  } else {
    emailError.classList.remove('show');
  }

  // Tipo
  const tipo = document.getElementById('tipo').value;
  const tipoError = document.getElementById('tipoError');
  if (!tipo) {
    tipoError.classList.add('show');
    valid = false;
  } else {
    tipoError.classList.remove('show');
  }

  return valid;
}

function showResult(msg, type) {
  document.getElementById('formResult').innerHTML = `<div class="${type}">${msg}</div>`;
}