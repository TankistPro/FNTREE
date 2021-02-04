const language = document.getElementsByClassName('header__language')[0];
const list_language = language.getElementsByClassName('list-language')[0];
const main_lang = language.getElementsByClassName('main')[0];
const img_contr = language.getElementsByTagName('img')[0];
const list_p = list_language.getElementsByTagName('p');

img_contr.addEventListener('click', () => open_list());

for (let i=0; i<list_p.length; i++) {
    list_p[i].addEventListener('click', () => changeLn(list_p[i]));
}


function open_list() {
    if (img_contr.style.transform == 'rotate(180deg)') {
        img_contr.style.transform = 'rotate(0deg)';
        main_lang.style.color = '#000';
        list_language.style.display = 'none'
    } else {
        img_contr.style.transform = 'rotate(180deg)';
        main_lang.style.color = '#fff';
        list_language.style.display = 'block'
    }
}

function changeLn(el) {
    main_lang.textContent = `${el.textContent}`;
    img_contr.style.transform = 'rotate(0deg)';
    main_lang.style.color = '#000';
    list_language.style.display = 'none'
}
