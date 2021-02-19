const btn_changeEmail = document.getElementsByClassName('settings__list')[0].getElementsByTagName('p')[1];
const window_changeEmail = document.getElementsByClassName('popop-enter-email')[0];
const btn_closeChangeEmail = window_changeEmail.getElementsByClassName('close')[0];
const btn_enterChangeEmail = window_changeEmail.getElementsByTagName('button')[0];

const btn_changeEmailM = document.getElementsByClassName('header-user__main__list')[0].getElementsByClassName('item')[1];


btn_changeEmail.addEventListener('click', () => openChangeEmail());
btn_changeEmailM.addEventListener('click', () => openChangeEmail());
btn_closeChangeEmail.addEventListener('click', () => closeChangeEmail());
btn_enterChangeEmail.addEventListener('click', () => closeChangeEmail());

function openChangeEmail() {
    window_changeEmail.style.display = 'flex';
}

function closeChangeEmail() {
    window_changeEmail.style.display = 'none';
}

