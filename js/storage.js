export function saveCadastro(data) {
  const cadastros = JSON.parse(localStorage.getItem('ecovida_cadastros') || '[]');
  cadastros.push(data);
  localStorage.setItem('ecovida_cadastros', JSON.stringify(cadastros));
}