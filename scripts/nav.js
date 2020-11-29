const nav = document.querySelector('.navigation');
const burger = document.querySelector('.navigation__hamburgerBtn');

export function HandleBurgerClick() {
  burger.classList.toggle('navigation__hamburgerBtn--active');
  nav.classList.toggle('navigation--active');
}
