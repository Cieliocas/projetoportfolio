// Seleciona o ícone de menu e o menu em si
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

// Função para alternar o menu hambúrguer
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

/*
inspiration
https://dribbble.com/shots/4684682-Aquatic-Animals
*/

var swiper = new Swiper(".swiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true
    },
    keyboard: {
        enabled: true
    },
    mousewheel: {
        thresholdDelta: 70
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        640: {
        slidesPerView: 2
    },
        768: {
        slidesPerView: 2
    },
        1024: {
        slidesPerView: 3
    },
        1560: {
        slidesPerView: 3
    }
    }
});
