/*Desplegar el menu*/
const iconMenu = document.querySelector(".header__menu-img");
const menu = document.querySelector(".header__nav");

iconMenu.addEventListener('click', () => {
    menu.classList.toggle("show");
});

document.addEventListener('click', (e) => {
    if(!menu.contains(e.target) && !iconMenu.contains(e.target)) {
        menu.classList.remove("show");
    }
});