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





