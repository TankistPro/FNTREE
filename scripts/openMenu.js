const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu-burger-block");
const close = document.querySelector(".close-menu");

const openMenu = () => {
    menu.style.top = "0";
}

const closeMenu = () => {
    menu.style.top = "-50%";
}

menuIcon.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);