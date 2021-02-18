const arrowLeft = document.querySelector('.arrows-block__left'),
    arrowRight = document.querySelector('.arrows-block__right'),
    arrowRightAdapt = document.querySelector('.slider-arrow-right');

const sliderWrapper = document.querySelector('.slider-wrapper'),
    sliderItem = sliderWrapper.children;

const sliderTime = document.querySelector('.slider-counter__line'),
    timeTop = sliderTime.querySelector('.slider-counter__line-top'),
    timeBottom = sliderTime.querySelector('.slider-counter__line-bottom');

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
    if (side == 'right') {
        sliderWrapper.style.transition = 'transform 0.6s ease';
        sliderWrapper.style.transform = `translateX(-100%)`;
        timeTop.style.height = '100%';
        timeBottom.style.height = '0%';

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

            timeTop.style.height = '100%';
            timeBottom.style.height = '0%';
        }, 200)
    }
}