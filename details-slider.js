// PRODUCT DETAILS SLIDER
const details__slider = document.querySelector('.details__slider')
const details__slides = document.querySelectorAll('.details__slide')
const btnLeft = document.querySelector('.details__btn--left')
const btnRight = document.querySelector('.details__btn--right')

let curSlide = 0;
const maxSlide = details__slides.length



console.log(details__slider, details__slides)
console.log(btnLeft, btnRight)

// 0%, 100%, 200%, 300%

const goToSlide = function(slide) {
    details__slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
}

goToSlide(0);

// Next slide
const nextSlide = function() {
    if(curSlide === maxSlide - 1) {
        curSlide = 0
    } else {
        curSlide++;
    }
   
    goToSlide(curSlide)
};

const prevSlide = function() {
    if (curSlide === 0) {
        curSlide = maxSlide -1;
    } else {
        curSlide--;
    }
    goToSlide(curSlide)
}

btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide)