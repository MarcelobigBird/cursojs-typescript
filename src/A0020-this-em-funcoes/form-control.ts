import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const submitEventFn = (event: Event) => {
  event.preventDefault();
  const target = event.target as HTMLFormElement; // trocar this por target

  hideErrorMessage(target);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  shoudSendform(target) && form.submit();
};

form.addEventListener('submit', submitEventFn);

const checkEqualPasswords = (input: HTMLInputElement, input2: HTMLInputElement) => {
  if (input.value !== input2.value) {
    showErrorMessage(input, 'Passwords must be the same');
    showErrorMessage(input2, 'Passwords must be the same');
  }
};

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido');
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo não pode ficar vazio.');
  });
}

function hideErrorMessage(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;

  errorMessage.innerHTML = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

/* eslint-disable prefer-const */

function shoudSendform(form: HTMLFormElement): boolean {
  let send = true;

  let error = form.querySelectorAll('.' + SHOW_ERROR_MESSAGES);
  error.forEach(() => (send = false));

  return send;
}
