const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu-burger-block");
const close = document.querySelector(".close-menu");
const wrapper = document.querySelector(".wrapper");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");

const openMenu = () => {
    if(!menu.classList.contains("open")) {
        menu.classList.add("open");
        wrapper.style.transition = ".3s all";
        wrapper.style.transform = "translateX(288px)";
        body.style.overflow = "hidden";
        overlay.style.display = "block";
        menu.style.left= "0";
    }
}

const closeMenu = () => {
    console.log("click")
    menu.style.left= "-100%";
    wrapper.style.transform = "translateX(0px)";
    menu.classList.remove("open");
    overlay.style.display = "none";
}

overlay.addEventListener("click", closeMenu)
menuIcon.addEventListener("click", openMenu);