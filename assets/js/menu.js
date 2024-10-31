const burgerMenu = document.querySelector(".burger");
const menu = document.querySelector(".header-menu_mobile");

burgerMenu.addEventListener('click', () => {
  document.body.classList.toggle('lock');
  burgerMenu.classList.toggle('active');
  menu.classList.toggle('active');
})