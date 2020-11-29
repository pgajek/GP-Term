import initiateGrid from './grid.js';
import { HandleBurgerClick } from './nav.js';
import {
  handleOfferChange,
  handleReadMore,
  handleTextChange,
} from './aboutUs.js';
import Slider from './slider.js';

const burger = document.querySelector('.navigation__hamburgerBtn');
const squares = document.querySelectorAll('.realizations__realization');
const wrapper = document.querySelector('.realizations__wrapper');
const shineElements = document.querySelectorAll('.realizations__insideWrapper');
const readMore = document.querySelectorAll('.offer__readMoreBtn');
const innerWrappers = document.querySelectorAll('.offer__innerWrapper');
const offerBoxes = document.querySelectorAll('.offer__headerBox');
const abContainers = [...document.querySelectorAll('.aboutUs__container')];

setInterval(() => {
  shineElements.forEach((item) =>
    item.classList.remove('realizations__insideWrapper--shine')
  );
  const shine = [...shineElements][
    Math.floor(Math.random() * shineElements.length)
  ];
  shine.classList.add('realizations__insideWrapper--shine');
}, 2500);

initiateGrid(squares, wrapper);
window.addEventListener('resize', (squares, wrapper) =>
  initiateGrid(squares, wrapper)
);

burger.addEventListener('click', (burger) => HandleBurgerClick(burger));

readMore.forEach((button) =>
  button.addEventListener('click', (e) => handleReadMore(e))
);
abContainers[0]
  .querySelector('.aboutUs__header')
  .classList.add('aboutUs__header--onTop');
abContainers[0]
  .querySelector('.aboutUs__text')
  .classList.add('aboutUs__text--onTop');

innerWrappers.forEach((wrapper) => {
  if (wrapper.dataset.id == 1) {
    return;
  } else
    wrapper.closest('.offer__text').classList.add('offer__text--invisible');
});
for (const elem of abContainers) {
  elem.addEventListener('click', (e) => handleTextChange(e));
}
offerBoxes.forEach((box) =>
  box.addEventListener('click', (e) => handleOfferChange(e))
);

const ReferenceSlider = new Slider('.references__slider', true);
