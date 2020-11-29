function setUpGrid(squares, wrapper) {
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

export default function initiateGrid(squares, wrapper) {
  setUpGrid(squares, wrapper);
  for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add(`realizations__realization--${i + 1}`);
  }
}
