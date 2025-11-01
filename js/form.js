import { saveCadastro } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastroForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (validate()) {
      const data = {
        nome: document.getElementById('nome').value.trim(),
        email: document.getElementById('email').value.trim(),
        tipo: document.getElementById('tipo').value,
        data: new Date().toLocaleString('pt-BR')
      };
      saveCadastro(data);
      showResult('Cadastro realizado com sucesso!', 'success');
      form.reset();
      hideErrors(); // Limpa erros após sucesso
    }
  });
});

function validate() {
  let valid = true;
  hideErrors(); // Limpa erros anteriores

  // Nome
  const nome = document.getElementById('nome').value.trim();
  const nomeError = document.getElementById('nomeError');
  if (!nome) {
    nomeError.classList.add('show');
    valid = false;
  }

  // Email
  const email = document.getElementById('email').value.trim();
  const emailError = document.getElementById('emailError');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.classList.add('show');
    valid = false;
  }

  // Tipo
  const tipo = document.getElementById('tipo').value;
  const tipoError = document.getElementById('tipoError');
  if (!tipo) {
    tipoError.classList.add('show');
    valid = false;
  }

  return valid;
}

function hideErrors() {
  const errors = document.querySelectorAll('.error');
  errors.forEach(err => err.classList.remove('show'));
}

function showResult(msg, type) {
  const result = document.getElementById('formResult');
  result.innerHTML = `
    <p style="
      background: #e8f5e9;
      color: #2e7d32;
      padding: 12px;
      border-radius: 6px;
      text-align: center;
      font-weight: 500;
      margin-top: 15px;
      border: 1px solid #c8e6c9;
    ">
      ${msg}
    </p>
  `;
  // Remove após 5 segundos
  setTimeout(() => {
    result.innerHTML = '';
  }, 5000);
}
