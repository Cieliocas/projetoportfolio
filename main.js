// Seleciona o ícone de menu e o menu em si
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

// Função para alternar o menu hambúrguer
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

$(document).ready(function() {
    let currentIndex = 0;
    const items = $('.carousel-item');
    const itemCount = items.length;

    function showNextItem() {
        const nextIndex = (currentIndex + 1) % itemCount;
        items.eq(currentIndex).css('transform', 'translateX(-100%)');
        items.eq(nextIndex).css('transform', 'translateX(0)');
        currentIndex = nextIndex;
    }

    setInterval(showNextItem, 3000); // Troca a cada 3 segundos
});