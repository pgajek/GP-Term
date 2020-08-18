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
