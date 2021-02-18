const arrowLeft = document.querySelector('.arrows-block__left'),
    arrowRight = document.querySelector('.arrows-block__right'),
    arrowRightAdapt = document.querySelector('.slider-arrow-right');

const sliderWrapper = document.querySelector('.slider-wrapper'),
    sliderItem = sliderWrapper.children;

const sliderTime = document.querySelector('.slider-counter__line'),
    timeTop = sliderTime.querySelector('.slider-counter__line-top'),
    timeBottom = sliderTime.querySelector('.slider-counter__line-bottom');

const counterTop = document.querySelector('.slider-counter__top'),
    counterBottom = document.querySelector('.slider-counter__bottom');


for (let i = 0; i<sliderItem.length; i++) {
    sliderItem[i].style.order = `${i}`;
}


timeTop.style.height = '100%';
timeBottom.style.height = '0%';

let timerSlider = setInterval(() => {
    let i = timeTop.style.height.replace('%', '')-1;
    let k = Number(timeBottom.style.height.replace('%', ''))+1;
    timeTop.style.height = `${i}%`;
    timeBottom.style.height = `${k}%`;
    if (i == 0) {
        gorizontalSlider('right');
        timeTop.style.height = '100%';
        timeBottom.style.height = '0%';
    }
}, 50);

arrowRight.addEventListener('click', () => gorizontalSlider('right'));
arrowRightAdapt.addEventListener('click', () => gorizontalSlider('right'));
arrowLeft.addEventListener('click', () => gorizontalSlider('left'));

function gorizontalSlider(side) {
    let countTop, countBottom;
    if (side == 'right') {
        sliderWrapper.style.transition = 'transform 0.6s ease';
        sliderWrapper.style.transform = `translateX(-100%)`;
        timeTop.style.height = '100%';
        timeBottom.style.height = '0%';

        for (let i=0; i<sliderItem.length; i++) {
            if (sliderItem[i].style.order == '0') {
                countBottom = sliderItem[i].getAttribute('name');
                if (countBottom == sliderItem.length) {
                    countBottom = 0;
                }
                countBottom = Number(countBottom)+1;
            }
            if (sliderItem[i].style.order == '1') {
                countTop = sliderItem[i].getAttribute('name');
                countTop = Number(countTop)+1;
                if (countTop == sliderItem.length+1) {
                    countTop = 1;
                }
            }
        }

        countTop = ('0' + countTop).split(-2)[0];
        countBottom = ('0' + countBottom).split(-2)[0];
        counterBottom.textContent = countBottom;
        counterTop.textContent = countTop;

        setTimeout(() => {
            for (let i=0; i<sliderItem.length; i++) {
                let k = sliderItem[i].style.order;
                if (k==0) {
                    k = Number(sliderItem.length);
                }
                k = Number(k)-1;
                sliderItem[i].style.order = `${k}`;
            }
            sliderWrapper.style.transition = 'none';
            sliderWrapper.style.transform = `translateX(0%)`;
        }, 800);
    } 

    if (side == 'left') {
        timeTop.style.height = '100%';
        timeBottom.style.height = '0%';

        for (let i=0; i<sliderItem.length; i++) {
            if (sliderItem[i].style.order == sliderItem.length-1) {
                countBottom = sliderItem[i].getAttribute('name');
            }
            if (sliderItem[i].style.order == '0') {
                countTop = sliderItem[i].getAttribute('name');
                countTop = Number(countTop);
            }
        }

        countTop = ('0' + countTop).split(-2)[0];
        countBottom = ('0' + countBottom).split(-2)[0];

        counterBottom.textContent = countBottom;
        counterTop.textContent = countTop;

        for (let i=0; i<sliderItem.length; i++) {
            let k = sliderItem[i].style.order;
            if (k==Number(sliderItem.length)-1) {
                k = -1;
            }
            k = Number(k)+1;
            sliderItem[i].style.order = `${k}`;
        }
        sliderWrapper.style.transition = 'none';
        sliderWrapper.style.transform = `translateX(-100%)`;
        setTimeout(() => {
            sliderWrapper.style.transition = 'transform 0.6s ease';
            sliderWrapper.style.transform = `translateX(0%)`;
        }, 200)
    }
}