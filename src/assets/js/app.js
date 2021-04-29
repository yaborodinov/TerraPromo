

const burgerBtn = document.querySelector(".burger")
const mobileMenu = document.querySelector('.header__left .nav');
const header = document.querySelector(".header");
const main = document.querySelector(".main");



burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    main.classList.toggle("disable")
})