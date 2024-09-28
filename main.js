// Seleciona o ícone de menu e o menu em si
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

// Função para alternar o menu hambúrguer
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
