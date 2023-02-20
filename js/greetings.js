const loginForm = document.querySelector('#login__form');
const loginInput = document.querySelector('#login__form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

function paintGreetings(userName) {
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const storageUserName = localStorage.getItem(USERNAME_KEY);

if (storageUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', loginSubmit);
} else {
  paintGreetings(storageUserName);
}
