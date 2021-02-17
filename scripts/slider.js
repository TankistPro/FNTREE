// function checkEnd(offset) {
//     if(offset > 0 || offset < -3841) return offset = -1920;
//     else return offset;

// }

// const arrowLeft = document.querySelector(".arrows-block__left"),
//     arrowRight = document.querySelector(".arrows-block__right");

// const sliderWrapper = document.querySelector(".slider-wrapper"),
//     sliderItem = document.querySelector(".slider-item");
// console.log(sliderWrapper)

// let offset = -1920;
// sliderWrapper.style.transform = `translate(${ offset }px)`

// const changeSlide = (event) => {
//     const target = event.target.closest(".arrows-block__left" ) ||
//                 event.target.closest(".arrows-block__right" );

//     if(target.classList.contains("arrows-block__left")) {
//         offset = offset + sliderItem.clientWidth;
//         console.log(offset)
//         offset = checkEnd(offset);
//         sliderWrapper.style.transform = `translate(${ offset }px)`
//     } else {
//         offset = offset - sliderItem.clientWidth;
//         console.log(offset)
//         offset = checkEnd(offset);
//         sliderWrapper.style.transform = `translate(${ offset }px)`;
//     }
// };

// arrowLeft.addEventListener('click', changeSlide);
// arrowRight.addEventListener('click', changeSlide);

const arrowLeft = document.querySelector(".arrows-block__left"),
    arrowRight = document.querySelector(".arrows-block__right");

const sliderWrapper = document.querySelector(".slider-wrapper"),
    sliderItem = document.getElementsByClassName('.slider-item');

arrowLeft.addEventListener('click', () => {
    console.log('g');
    sliderWrapper.style.transform = 'translateX(-100%)';
    // console.log(sliderWrapper.style);
})