const user = document.getElementsByClassName('header__user')[0];
const contr_menu = user.getElementsByClassName('open')[0];
const menu = user.getElementsByClassName('header__user__func')[0];
const set = menu.getElementsByClassName('settings')[0];
const open_set = set.getElementsByClassName('settings__list')[0];


contr_menu.addEventListener('click', () => open_menu());
set.addEventListener('mouseover', () => openMenuSet());
set.addEventListener('mouseout', () => closeMenuSet());

function open_menu() {
    if (contr_menu.style.transform == 'rotate(180deg)') {
        contr_menu.style.transform = 'rotate(0deg)';
        menu.style.display = 'none';
    } else {
        contr_menu.style.transform = 'rotate(180deg)';
        menu.style.display = 'block';
    }
}

function openMenuSet() {
    open_set.style.display = "block";
}

function closeMenuSet() {
    open_set.style.display = "none";
}