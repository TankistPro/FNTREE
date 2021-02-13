const slider = document.getElementsByClassName('fortnite-packages__slider')[0];
const right = slider.getElementsByClassName('fp-btn_slider')[0];
const wrap = slider.getElementsByClassName('fortnite-packages__slider__blocks')[0];
let items = wrap.children;

wrap.style.transform = 'translateX(0)';
for (let i = 0; i<items.length; i++) {
    items[i].style.order = `${i}`;
}

if (window.innerWidth > 1162) {
    right.addEventListener('click', gorizontalSlider);
} else {
    right.addEventListener('click', verticalSlider);
}


function gorizontalSlider() {
    for (let i=0; i<items.length; i++) {
        let k = items[i].style.order;
        if (k==0) {
            k = Number(items.length);
        }
        k = Number(k)-1;
        items[i].style.order = `${k}`;
    }
    wrap.style.transition = 'none';
    wrap.style.transform = `translateX(${33.3333}%)`;
    
    setTimeout(() => {
        wrap.style.transition = 'transform 0.6s ease';
        wrap.style.transform = `translateX(0%)`;
    }, 50);
}

function verticalSlider() {
    for (let i=0; i<items.length; i++) {
        let k = items[i].style.order;
        if (k==0) {
            k = Number(items.length);
        }
        k = Number(k)-1;
        items[i].style.order = `${k}`;
    }
    wrap.style.transition = 'none';
    wrap.style.transform = `translateY(${33.3333}%)`;
    
    setTimeout(() => {
        wrap.style.transition = 'transform 0.6s ease';
        wrap.style.transform = `translateY(0%)`;
    }, 50);
}

window.addEventListener(`resize`, () => {
    if (window.innerWidth > 1162) {
        right.addEventListener('click', gorizontalSlider);
    } else {
        right.addEventListener('click', verticalSlider);
    }
});