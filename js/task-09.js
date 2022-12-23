const btnChangeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');

const changeColor = () => {
  btnChangeColor.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}

btnChangeColor.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}