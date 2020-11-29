const form = document.querySelector('.contact__form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const topic = document.getElementById('topic');
const msg = document.getElementById('message');

function setErrorFor(input, message) {
  const formControl = input.closest('.form-control');
  const error = formControl.querySelector('.errorMessage');

  error.innerText = message;

  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.closest('.form-control');
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const topic = password.value.trim();
  const msg = password2.value.trim();

  if (usernameValue === '') {
    setErrorFor(name, 'Proszę podać imię i nazwisko');
  } else {
    setSuccessFor(name);
  }
  if (emailValue === '') {
    setErrorFor(email, 'Proszę wpisaćadres e-mail');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Proszę podać poprawny e-mail');
  } else {
    setSuccessFor(email);
  }
  if (msg === '') {
    setErrorFor(msg, 'Proszę wpisać treść wiadomości');
  } else {
    setSuccessFor(msg);
  }

  if (topic === '') {
    setErrorFor(topic, 'Proszę wpisać temat');
  } else {
    setSuccessFor(topic);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});
