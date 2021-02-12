const btn_openNav = document.getElementsByClassName('header-open_nav')[0];
const btn_openUser = document.getElementsByClassName('header-open_user')[0];
const nav_popup = document.getElementsByClassName('header-nav')[0];
const user_popup = document.getElementsByClassName('header-user')[0];
const main_nav = nav_popup.getElementsByClassName('header-nav__main')[0];
const main_user = user_popup.getElementsByClassName('header-user__main')[0];
const close_nav = nav_popup.getElementsByClassName('header-nav__close')[0];
const close_user = user_popup.getElementsByClassName('header-user__close')[0];

const header = document.getElementsByClassName('header')[0];
const main = document.getElementsByTagName('main')[0];

btn_openUser.addEventListener('click', openUser);
btn_openNav.addEventListener('click', openNav);
close_nav.addEventListener('click', closeNav);
close_user.addEventListener('click', closeUser);

function openUser() {
    user_popup.style.display = 'flex';
    header.style.right = '0';
    main.style.right = '0';
    setTimeout(() => {
        main_user.style.right = '0'
        header.style.position = 'relative';
        header.style.right = '76%';
        main.style.position = 'relative';
        main.style.right = '76%';
    }, 20);
}

function openNav() {
    nav_popup.style.display = 'flex';
    header.style.left = '0';
    main.style.left = '0';
    setTimeout(() => {
        main_nav.style.left = '0'
        header.style.position = 'relative';
        header.style.left = '76%';
        main.style.position = 'relative';
        main.style.left = '76%';
    }, 20);
}

function closeNav() {
    main_nav.style.left = '-100%';
    header.style.position = 'none';
    header.style.left = '0';
    main.style.position = 'none';
    main.style.left = '0';
    nav_popup.style.display = 'none';
}

function closeUser() {
    user_popup.style.display = 'none';
    main_user.style.right = '-100%'
    header.style.position = 'none';
    header.style.right = '0';
    main.style.position = 'none';
    main.style.right = '0';
}