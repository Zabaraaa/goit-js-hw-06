function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const span = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click', onChangeColorBtn);

function onChangeColorBtn() {
  document.body.style.backgroundColor = span.textContent = getRandomHexColor();
}
