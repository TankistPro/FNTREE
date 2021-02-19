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

const eyeUserP = document.querySelector('.popop-change-password__block').querySelectorAll('.eye');

for (let i=0; i<eyeUserP.length; i++) {
    eyeUserP[i].addEventListener('click', () => changeInputUP(eyeUserP[i]));
}

function changeInputUP(el) {
    if (el.src.includes('eye-close')) {
        el.src = './img/user-panel/eye-open.svg';
        el.parentElement.querySelector('input').type = 'text';
    } else {
        el.src = './img/user-panel/eye-close.svg';
        el.parentElement.querySelector('input').type = 'password';
    }
}