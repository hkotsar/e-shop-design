// PRODUCT DETAILS SLIDER
const details__slider = document.querySelector('.details__slider')
const details__slides = document.querySelectorAll('.details__slide')
const btnLeft = document.querySelector('.details__btn--left')
const btnRight = document.querySelector('.details__btn--right')
const dotContainer = document.querySelector('.details__dots')

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

const createDots = function() {
    details__slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML('beforeend', 
        `<button class="details__dot" data-slide="${i}"></button>`
        )
    })
}

createDots();

const activeDot = function (slide) {
    document.querySelectorAll('.details__dot').forEach(dot => dot.classList.remove('details__dot--active'))

    document.querySelector(`.details__dot[data-slide="${slide}"]`).classList.add('details__dot--active')
}

activeDot(0);

goToSlide(0);

// Next slide
const nextSlide = function() {
    if(curSlide === maxSlide - 1) {
        curSlide = 0
    } else {
        curSlide++;
    }
   
    goToSlide(curSlide)
    activeDot(curSlide)
};

const prevSlide = function() {
    if (curSlide === 0) {
        curSlide = maxSlide -1;
    } else {
        curSlide--;
    }
    goToSlide(curSlide)
    activeDot(curSlide)
}

btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide)

dotContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('details__dot')) {
        const slide = e.target.dataset.slide
        goToSlide(slide)
        activeDot(slide)
    }
})