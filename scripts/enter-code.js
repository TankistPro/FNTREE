const window_enterCode = document.getElementsByClassName('popop-enter-code')[0];
const btn_closeEnterCode = window_enterCode.getElementsByClassName('close')[0];
const btn_enterEnterCode = window_enterCode.getElementsByTagName('button')[0];

const btn_sendCode = document.querySelectorAll('div.ex-state.orange');

for (let i=0; i<btn_sendCode.length; i++) {
    btn_sendCode[i].addEventListener('click', openEnterCode);
}

btn_enterEnterCode.addEventListener('click', () => enterEnterCode());
btn_closeEnterCode.addEventListener('click', () => closeEnterCode());


function openEnterCode() {
    window_enterCode.style.display = 'flex';
}

function closeEnterCode() {
    window_enterCode.style.display = 'none';
}

function enterEnterCode() {
    window_enterCode.style.display = 'none';
}