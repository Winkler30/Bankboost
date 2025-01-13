var swiper = new Swiper(".slide-depositions", {
    slidesPerView: 3,
    spaceBetween: 32,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 17,
        },
        768: {
            slidesPerView: 2.1,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 32,
        }
    }
});

const dropdown = document.querySelector('.js-dropdown');
const clickDrop = document.querySelector('.js-btn-dropdown');

function openDropdown(event) {
    event.preventDefault();
    dropdown.classList.toggle('active');
}
clickDrop.addEventListener('click', openDropdown);
dropdown.addEventListener('mouseleave', openDropdown);



const header = document.getElementById('js-header');

function fixedMenu() {
    if (window.scrollY > 80) {
        header.classList.add('fixed-menu');
    }
    else {
        header.classList.remove('fixed-menu');
    }
}
document.addEventListener('scroll', fixedMenu);