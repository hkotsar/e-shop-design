const cartBtn = document.getElementById('cartBtn')
const cart = document.getElementById('cart')

function toggleCart() {
    cart.classList.toggle('cart__active')
}

cartBtn.addEventListener('click', toggleCart)

