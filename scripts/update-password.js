const window_updatePas = document.getElementsByClassName('update-password')[0];
const window_upadatePasKey = document.getElementsByClassName('update-password-key')[0];
const window_login =  document.getElementsByClassName('modal-wrapper login')[0];
const btn_openUpadePas = window_login.getElementsByClassName('form-q')[0];
const btn_closeUpdatePas = window_updatePas.getElementsByClassName('close')[0];
const btn_sendCode = window_updatePas.getElementsByTagName('button')[0];

btn_openUpadePas.addEventListener('click', () => openUpdatePas());
btn_closeUpdatePas.addEventListener('click', () => closeUpdatePas());
btn_sendCode.addEventListener('click', () => openUpdatePasKey());

function openUpdatePas() {
    window_updatePas.style.display = 'flex';
    window_login.style.display = 'none';
}

function closeUpdatePas() {
    window_updatePas.style.display = 'none';
}

function openUpdatePasKey() {
    window_updatePas.style.display = 'none';
    window_upadatePasKey.style.display = 'flex';
}

const list_input = window_upadatePasKey.getElementsByClassName('form')[0].getElementsByTagName('input');
const btn_closeUpdatePasKey = window_upadatePasKey.getElementsByClassName('close')[0];
const btn_enterUpdatePasKey = window_upadatePasKey.getElementsByTagName('button')[0];

btn_closeUpdatePasKey.addEventListener('click', () => closeUpdatePasKey());
btn_enterUpdatePasKey.addEventListener('click', () => closeUpdatePasKey());

for (let i=0; i<list_input.length; i++) {
    list_input[i].addEventListener('focus', () => focus_input(event));
    list_input[i].addEventListener('input', () => input_pas(list_input[i], i));
}

function closeUpdatePasKey() {
    window_upadatePasKey.style.display = 'none';
}

function focus_input() {
    event.target.select();
}
function input_pas(el, i) {
    
    if (el.value.length == 5) {
        let key = `${el.value}`;
        for (let k=0; k<5; k++) {
            list_input[k].value = key[k];
        }
    } else {
        if (el.value.length > 1) {
            el.value = el.value[el.value.length-1];
        }
        if (el.value.length == 1) {
            // while (list_input[i+1].value.length == 1) {
            //     if (i == list_input.length-2) {
            //         break;
            //     }
            //     i++;
            // }
            if (i < list_input.length-1) {
                list_input[i+1].focus();
            }
        }
    }
}


