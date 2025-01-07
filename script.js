const hamburger = document.getElementById('hamburger');
const navbarMenu = document.getElementById('navbar-menu');
const menuItems = document.querySelectorAll('.navbar-items li a');

// Adicionando um evento de clique ao ícone do hamburger
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('open');
    navbarMenu.classList.toggle('open');
});

// Fechar o menu e carregar a página ao clicar em um item
menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
        // Fecha o menu
        hamburger.classList.remove('open');
        navbarMenu.classList.remove('open');
        
        // Carrega a página quando um item for clicado
        window.location.href = item.getAttribute('href'); // Realiza o redirecionamento para a página clicada
    });
});
