const abContainers = [...document.querySelectorAll('.aboutUs__container')];

export function handleTextChange(e) {
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

const readMore = document.querySelectorAll('.offer__readMoreBtn');
const innerWrappers = document.querySelectorAll('.offer__innerWrapper');

export function handleReadMore(e) {
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

export function handleOfferChange(e) {
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
