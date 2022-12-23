const loginForm = document.querySelector('.login-form');


loginForm.addEventListener('submit', submitGetter);
const profile = {};


function submitGetter(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === '' || password.value === '') {
    alert("Всі поля повинні бути заповнені!");
  } else {
    profile.email = email.value;
    profile.password = password.value;

    console.log(profile);
  }
  event.currentTarget.reset();
}