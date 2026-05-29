// Seleciona o botão de alternância de tema no HTML
const themeToggleBtn = document.getElementById('theme-toggle');

// Verifica se o usuário já havia escolhido o tema escuro antes (salvo no navegador)
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

// Adiciona a ação de clique no botão
themeToggleBtn.addEventListener('click', () => {
    // Alterna a classe 'dark-theme' no corpo da página
    document.body.classList.toggle('dark-theme');
    
    // Salva a escolha do usuário no Local Storage para quando ele atualizar a página
    let theme = 'light';
    if (document.body.classList.contains('dark-theme')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
});

// Adiciona animação suave de carregamento nas seções
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 150 * index);
    });
});