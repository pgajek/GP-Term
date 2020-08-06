const burger = document.querySelector('.navigation__hamburgerBtn');
const nav = document.querySelector('.navigation');

burger.addEventListener('click', HandleBurgerClick);
function HandleBurgerClick() {
  burger.classList.toggle('navigation__hamburgerBtn--active');
  nav.classList.toggle('navigation--active');
}
