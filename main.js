const cartBtn = document.querySelectorAll('.cartBtn')
const cart = document.getElementById('cart')
const visbleIcon = document.querySelector('.cartIcon-1')
const invisbleIcon = document.querySelector('.cartIcon-2')
const visibleIconPhone = document.querySelector('.cartIconPhone-1')
const invisibleIconPhone = document.querySelector('.cartIconPhone-2')

const visible = [visbleIcon, visibleIconPhone]
const invisible = [invisbleIcon, invisibleIconPhone]

const toggleCart = function() {
    cart.classList.toggle('cart__active')

    if (cart.classList.contains('cart__active')) {
        for (let i = 0; i < visible.length; i++) 
            visible[i].classList.replace('nav__btn--visible-1', 'nav__btn--invisible-1');
        

        for (let i = 0; i < invisible.length; i++) 
            invisible[i].classList.replace('nav__btn--invisible-2', 'nav__btn--visble-2')

    } else {
        visbleIcon.classList.remove('nav__btn--invisible-1')
        invisbleIcon.classList.remove('nav__btn--visble-2')
        visibleIconPhone.classList.remove('nav__btn--invisible-1')
        invisibleIconPhone.classList.remove('nav__btn--visble-2')
        visbleIcon.classList.add('nav__btn--visible-1')
        invisbleIcon.classList.add('nav__btn--invisible-2')
        visibleIconPhone.classList.add('nav__btn--visible-1')
        invisibleIconPhone.classList.add('nav__btn--invisible-2')
    }
   
}

for (let i = 0; i < cartBtn.length; i++)
    cartBtn[i].addEventListener('click', toggleCart)


const productionNavSection = document.querySelector('#products')

const productNav = document.querySelector('.pro')
const cordinates = productionNavSection.getBoundingClientRect()

console.log(cordinates)
console.log(productNav)

window.addEventListener('scroll', function () {
    if (window.scrollY > cordinates.top) {
        productNav.classList.add('pro__sticky')
        console.log('hello')
    } else {
        productNav.classList.remove('pro__sticky')
        console.log('sdsd')
    }
})





// PRODUCT FILTER (PHONE)
const filter = document.querySelector('.pro-phone')
const filterOpen = document.querySelector('.filter__btn')
const filterClose = document.querySelector('.filter__close')

console.log([filter, filterOpen, filterClose])

const openFilter = function () {
    filter.classList.remove('pro-phone__hidden')
}

const closeFilter = function () {
    filter.classList.add('pro-phone__hidden')
}

filterOpen.addEventListener('click', openFilter);
filterClose.addEventListener('click', closeFilter);








