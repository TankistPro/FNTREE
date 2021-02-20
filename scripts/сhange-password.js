const window_changePas = document.getElementsByClassName('popop-change-password')[0];
const btn_change = document.getElementsByClassName('settings__list')[0].getElementsByTagName('p')[0];
const btn_changeM = document.getElementsByClassName('header-user__main__list')[0].getElementsByClassName('item')[0];
const btn_closeChangePas = window_changePas.getElementsByClassName('close')[0];
const btn_changeChangePas = window_changePas.getElementsByTagName('button')[0];

btn_change.addEventListener('click', () => openChangePas());
btn_changeM.addEventListener('click', () => openChangePas());
btn_closeChangePas.addEventListener('click', () => closeChangePas());
btn_changeChangePas.addEventListener('click', () => changeChangePas());

function openChangePas() {
    window_changePas.style.display = 'flex';
}

function closeChangePas() {
    window_changePas.style.display = 'none';
}

// const window_enterCode = document.getElementsByClassName('popop-enter-code')[0];
// const btn_closeEnterCode = window_enterCode.getElementsByClassName('close')[0];
// const btn_enterEnterCode = window_enterCode.getElementsByTagName('button')[0];

// btn_enterEnterCode.addEventListener('click', () => enterEnterCode());
// btn_closeEnterCode.addEventListener('click', () => closeEnterCode());


function changeChangePas() {
    window_changePas.style.display = 'none';
    // window_enterCode.style.display = 'flex';
}

// function closeEnterCode() {
//     window_enterCode.style.display = 'none';
// }

// function enterEnterCode() {
//     window_enterCode.style.display = 'none';
// }