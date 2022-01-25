// SIGN
const sign_up_btn = document.querySelector('.signup')
const sign_in_btn = document.querySelector('.signin')
const container = document.querySelector('.section-sign')



sign_up_btn.addEventListener("click", () => {
    console.log('work')
    container.classList.add("sign-mode");
});
  
  sign_in_btn.addEventListener("click", () => {
    console.log('work')
    container.classList.remove("sign-mode");
});