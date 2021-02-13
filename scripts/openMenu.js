const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu-burger-block");
const close = document.querySelector(".close-menu");
const wrapper = document.querySelector(".wrapper");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");

const openMenu = () => {
    if(!menu.classList.contains("open")) {
        menu.classList.add("open");
        wrapper.style.transition = ".5s all";
        wrapper.style.transform = "translateX(288px)";
        body.style.overflow = "hidden";
        overlay.style.display = "block";
        menu.style.left= "0";
    }
}

const closeMenu = () => {
    menu.style.left= "-100%";
    wrapper.style.transform = "initial";
    menu.classList.remove("open");
    overlay.style.display = "none";
    body.style.overflow = "auto";
}

overlay.addEventListener("click", closeMenu)
menuIcon.addEventListener("click", openMenu);