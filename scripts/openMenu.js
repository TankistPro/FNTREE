const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu-burger-block");
const close = document.querySelector(".close-menu");
const wrapper = document.querySelector(".wrapper");
const body = document.querySelector("body");

const openMenu = () => {
    wrapper.style.transition = ".3s all";
    wrapper.style.backgroundColor = "rgba(19, 0, 48, 0.33)";
    wrapper.style.transform = "translateX(288px)";
    body.style.overflow = "hidden";
    menu.style.left= "0";
}

menuIcon.addEventListener("click", openMenu);