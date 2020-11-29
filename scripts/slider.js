export default class Slider {
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
