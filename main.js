const burger = document.querySelector('.navigation__hamburgerBtn');
const nav = document.querySelector('.navigation');

burger.addEventListener('click', HandleBurgerClick);
function HandleBurgerClick() {
  burger.classList.toggle('navigation__hamburgerBtn--active');
  nav.classList.toggle('navigation--active');
}

// aboutUs

const abContainers = [...document.querySelectorAll('.aboutUs__container')];

abContainers[0]
  .querySelector('.aboutUs__header')
  .classList.add('aboutUs__header--onTop');
abContainers[0]
  .querySelector('.aboutUs__text')
  .classList.add('aboutUs__text--onTop');

function handleTextChange(e) {
  if (e.target.dataset.id == '2') {
    abContainers[0]
      .querySelector('.aboutUs__header')
      .classList.remove('aboutUs__header--onTop');
    abContainers[0]
      .querySelector('.aboutUs__text')
      .classList.remove('aboutUs__text--onTop');

    abContainers[1]
      .querySelector('.aboutUs__header')
      .classList.add('aboutUs__header--onTop');
    abContainers[1]
      .querySelector('.aboutUs__text')
      .classList.add('aboutUs__text--onTop');
  } else {
    abContainers[1]
      .querySelector('.aboutUs__header')
      .classList.remove('aboutUs__header--onTop');
    abContainers[1]
      .querySelector('.aboutUs__text')
      .classList.remove('aboutUs__text--onTop');

    abContainers[0]
      .querySelector('.aboutUs__header')
      .classList.add('aboutUs__header--onTop');
    abContainers[0]
      .querySelector('.aboutUs__text')
      .classList.add('aboutUs__text--onTop');
  }
}

for (const elem of abContainers) {
  elem.addEventListener('click', (e) => handleTextChange(e));
}

/* <i class="fas fa-angle-up"></i> */

const readMore = document.querySelectorAll('.offer__readMoreBtn');
const innerWrappers = document.querySelectorAll('.offer__innerWrapper');

function handleReadMore(e) {
  const target = e.target.closest('button');
  const inners = [...innerWrappers].filter(
    (wrapper) => wrapper.dataset.id === target.dataset.id
  );

  inners[0].classList.toggle('offer__innerWrapper--active');

  const icon = target.querySelector('i');

  if (icon.classList.contains('fa-angle-up')) {
    icon.classList.remove('fa-angle-up');
    icon.classList.add('fa-angle-down');
  } else {
    icon.classList.add('fa-angle-up');
    icon.classList.remove('fa-angle-down');
  }
}

readMore.forEach((button) =>
  button.addEventListener('click', (e) => handleReadMore(e))
);

const offerBoxes = document.querySelectorAll('.offer__headerBox');

innerWrappers.forEach((wrapper) => {
  if (wrapper.dataset.id == 1) {
    return;
  } else
    wrapper.closest('.offer__text').classList.add('offer__text--invisible');
});

function handleOfferChange(e) {
  const targetId = e.target.closest('.offer__headerBox').dataset.id;

  innerWrappers.forEach((wrapper) => {
    wrapper.closest('.offer__text').classList.add('offer__text--invisible');

    wrapper.classList.remove('offer__innerWrapper--active');
  });

  innerWrappers[targetId - 1]
    .closest('.offer__text')
    .classList.remove('offer__text--invisible');

  readMore.forEach((btn) => {
    const icon = btn.querySelector('.fas');
    icon.closest('i').classList.add('fa-angle-down');
    icon.closest('i').classList.remove('fa-angle-up');
  });
}

offerBoxes.forEach((box) =>
  box.addEventListener('click', (e) => handleOfferChange(e))
);

// SLIDER
class Slider {
  constructor(elemSelector, activeClass, nextClass, previousClass) {
    this.currentSlide = 0;
    this.sliderSelector = elemSelector;
    this.sliderElem = null;
    this.slider = null;
    this.slides = null;
    this.arrowLeft = null;
    this.arrowRight = null;
    this.generateSlider();
    this.changeSlide(this.currentSlide);
    this.slideActiveClass = activeClass;
    this.previousSlideClass = previousClass;

    this.nextSlideClass = nextClass;
  }
  changeSlide(slideIndex) {
    this.slides.forEach((slide) => {
      slide.classList.remove('references__sliderItem--active');
      slide.classList.remove('references__sliderItem--left');
      slide.classList.remove('references__sliderItem--secondActive');
      slide.classList.remove('references__sliderItem--right');
      slide.classList.remove('references__sliderItem--behind');
      slide.setAttribute('aria-hidden', true);
    });

    let nextSlideIndex = slideIndex + 2;
    let secondActiveSlideIndex = slideIndex + 1;
    let prevSlideIndex = slideIndex - 1;
    if (slideIndex == 0) {
      prevSlideIndex = this.slides.length - 1;
    } else if (slideIndex == this.slides.length - 1) {
      secondActiveSlideIndex = 0;
      nextSlideIndex = 1;
    }
    if (secondActiveSlideIndex == this.slides.length) {
      secondActiveSlideIndex = 0;
      nextSlideIndex = 1;
    }
    if (nextSlideIndex == this.slides.length) {
      nextSlideIndex = 0;
    }

    this.slides[nextSlideIndex].classList.add('references__sliderItem--right');
    this.slides[prevSlideIndex].classList.add('references__sliderItem--left');
    this.slides[secondActiveSlideIndex].classList.add(
      'references__sliderItem--secondActive'
    );
    this.slides[slideIndex].classList.add('references__sliderItem--active');
    this.slides[slideIndex].setAttribute('aria-hidden', false);
    this.slides[secondActiveSlideIndex].setAttribute('aria-hidden', false);
    this.currentSlide = slideIndex;
  }
  nextSlide() {
    this.currentSlide++;
    if (this.currentSlide > this.slides.length - 1) {
      this.currentSlide = 0;
    }
    this.changeSlide(this.currentSlide);
  }
  previousSlide() {
    this.currentSlide--;
    if (this.currentSlide < 0) {
      this.currentSlide = this.slides.length - 1;
    }
    this.changeSlide(this.currentSlide);
  }
  createButtons() {
    this.arrowLeft = document.createElement('button');
    this.arrowLeft.type = 'button';
    this.arrowLeft.classList.add('references__sliderArrow');
    this.arrowLeft.classList.add('references__sliderArrow--arrowLeft');
    this.arrowLeft.addEventListener('click', () => this.previousSlide());

    this.arrowRight = document.createElement('button');
    this.arrowRight.type = 'button';
    this.arrowRight.classList.add('references__sliderArrow');
    this.arrowRight.classList.add('references__sliderArrow--arrowRight');
    this.arrowRight.addEventListener('click', () => this.nextSlide());

    this.slider.appendChild(this.arrowLeft);
    this.slider.appendChild(this.arrowRight);
  }
  generateSlider() {
    this.slider = document.querySelector(this.sliderSelector);

    const sliderWrapper = document.createElement('div');
    sliderWrapper.classList.add('references__sliderWrapper');

    this.slides = this.slider.children;

    while (this.slides.length) {
      sliderWrapper.appendChild(this.slides[0]);
    }
    this.slides = sliderWrapper.querySelectorAll('.references__sliderItem');
    this.slider.appendChild(sliderWrapper);
    this.createButtons();
  }
}

const ReferenceSlider = new Slider('.references__slider', true);

/////////////////
////GRID SCRIPT

const squares = document.querySelectorAll('.realizations__realization');
const wrapper = document.querySelector('.realizations__wrapper');

function setUpGrid() {
  let str = ' .';

  if (window.innerHeight > window.innerWidth) {
    for (let i = 0; i < squares.length; i++) {
      str += ` ${i + 1} .`;

      while (
        i === squares.length - 1 &&
        str.length % 5 > 0 &&
        str.length !== 5
      ) {
        str += ' .';
      }
    }
    let gridAreas = '';

    while (str.length > 0) {
      let line = str.substr(0, 6).trim();
      let newLine = '';
      for (let i = 0; i < line.length; i++) {
        let digit = line[i];

        if (digit != '.' && digit != ' ') {
          newLine += `a${digit}`;
        } else {
          newLine += digit;
        }
      }

      gridAreas = `${gridAreas} '${newLine}'`;
      str = str.replace(str.substr(0, 6), '');
    }

    wrapper.style.gridTemplateAreas = `${gridAreas}`;
  } else {
    for (let i = 0; i < squares.length; i++) {
      str += ` ${i + 1} .`;
      while (
        i === squares.length - 1 &&
        str.length % 5 > 0 &&
        str.length !== 5
      ) {
        str += ' .';
      }
    }
    let gridAreas = '';

    while (str.length > 0) {
      let line = str.substr(0, 10).trim();
      let newLine = '';
      for (let i = 0; i < line.length; i++) {
        let digit = line[i];

        if (digit != '.' && digit != ' ') {
          newLine += `a${digit}`;
        } else {
          newLine += digit;
        }
      }

      gridAreas = `${gridAreas} '${newLine}'`;
      str = str.replace(str.substr(0, 10), '');
    }

    wrapper.style.gridTemplateAreas = `${gridAreas}`;
  }
}

function initiateGrid() {
  setUpGrid();
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add(`realizations__realization--${i + 1}`);
  }
}

initiateGrid();

window.addEventListener('resize', initiateGrid);
