const slider = document.getElementsByClassName('fortnite-packages__slider')[0];
const right = slider.getElementsByClassName('fp-btn_slider')[0];
const wrap = slider.getElementsByClassName('fortnite-packages__slider__blocks')[0];
let itemsWrap = wrap.children;


for (let i = 0; i<itemsWrap.length; i++) {
    itemsWrap[i].style.order = `${i}`;
}

if (window.innerWidth > 1162) {
    right.addEventListener('click', gorizontalSlider);
} else {
    right.addEventListener('click', verticalSlider);
}


function gorizontalSlider() {
    wrap.style.transition = 'transform 0.6s ease';
    wrap.style.transform = `translateX(${-33.3333}%)`;

    setTimeout(() => {
        for (let i=0; i<itemsWrap.length; i++) {
            let k = itemsWrap[i].style.order;
            if (k==0) {
                k = Number(itemsWrap.length);
            }
            k = Number(k)-1;
            itemsWrap[i].style.order = `${k}`;
        }
        wrap.style.transition = 'none';
        wrap.style.transform = `translateX(0%)`;
    }, 600);
}

function verticalSlider() {
    wrap.style.transition = 'transform 0.6s ease';
    wrap.style.transform = `translateY(${-33.3333}%)`;

    setTimeout(() => {
        for (let i=0; i<itemsWrap.length; i++) {
            let k = itemsWrap[i].style.order;
            if (k==0) {
                k = Number(itemsWrap.length);
            }
            k = Number(k)-1;
            itemsWrap[i].style.order = `${k}`;
        }
        wrap.style.transition = 'none';
        wrap.style.transform = `translateY(0%)`;
    }, 600);
}

window.addEventListener(`resize`, () => {
    if (window.innerWidth > 1162) {
        right.addEventListener('click', gorizontalSlider);
        right.removeEventListener('click', verticalSlider);
    } else {
        right.removeEventListener('click', gorizontalSlider);
        right.addEventListener('click', verticalSlider);
    }
});