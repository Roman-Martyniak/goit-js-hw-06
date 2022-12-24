const btnChangeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.body;

function changeColor() {
  let colorChange = getRandomHexColor();
  document.body.style.backgroundColor = colorChange;
  color.textContent = colorChange;
}

btnChangeColor.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}