// GERENCIAMENTO DE TEMA (CLARO / ESCURO)
function setTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById('btn-light').classList.add('active');
    document.getElementById('btn-dark').classList.remove('active');
  } else {
    document.documentElement.removeAttribute('data-theme');
    document.getElementById('btn-dark').classList.add('active');
    document.getElementById('btn-light').classList.remove('active');
  }
  localStorage.setItem('portfolio-theme', theme);
}

// Carregar tema armazenado
const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
setTheme(savedTheme);

// MODAL DE DETALHES DE PROJETOS
const projectDetails = {
  calc: {
    title: "Calculadora Monocromática",
    content: `
      <p>Projeto de interface autônoma focada em alta performance e zero dependências externas.</p><br>
      <p><strong>Destaques Técnicos:</strong></p>
      <ul style="margin-left: 1.2rem; margin-top: 0.5rem;">
        <li>Solução para erros numéricos com ponto flutuante em JavaScript.</li>
        <li>Histórico de cálculos persistente utilizando LocalStorage.</li>
        <li>Suporte total para entradas via teclado numérico e atalhos.</li>
        <li>Estruturação monorepo simples e leve pronta para GitHub Pages.</li>
      </ul>
    `
  },
  imap: {
    title: "Sistemas Internos do IMAP",
    content: `
      <p>Suporte direto no ciclo de testes e manutenção de ferramentas de gestão pública do órgão.</p><br>
      <p><strong>Atividades principais:</strong></p>
      <ul style="margin-left: 1.2rem; margin-top: 0.5rem;">
        <li>Acompanhamento de rotinas de banco de dados MySQL e servidores XAMPP.</li>
        <li>Configuração e liberação de acessos a rotas e pastas de rede por IP.</li>
        <li>Validação e testes de fluxos operacionais internos.</li>
      </ul>
    `
  }
};

function openModal(key) {
  const data = projectDetails[key];
  if (!data) return;
  
  document.getElementById('modalTitle').innerText = data.title;
  document.getElementById('modalBody').innerHTML = data.content;
  document.getElementById('modalBackdrop').classList.add('open');
}

function handleModalBackdropClick(e) {
  if (e.target.id === 'modalBackdrop') {
    closeModal();
  }
}

function closeModal() {
  document.getElementById('modalBackdrop').classList.remove('open');
}