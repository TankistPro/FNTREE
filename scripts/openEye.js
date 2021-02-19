const eye = document.querySelectorAll('.password');

for (let i=0; i<eye.length; i++) {
    eye[i].addEventListener('click', () => changeInput(eye[i]));
}

function changeInput(el) {
    if (el.children[0].src.includes('eye-ico')) {
        el.children[0].src = './img/popup/eye-open.svg';
        el.parentElement.getElementsByTagName('input')[0].type = 'text';
    } else {
        el.children[0].src = './img/popup/eye-ico.svg';
        el.parentElement.getElementsByTagName('input')[0].type = 'password';
    }
}