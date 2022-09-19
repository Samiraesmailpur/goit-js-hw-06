function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input[type="number"]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const btnCreateEl = document.querySelector('button[data-create]');
const boxes = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);

let size = 30;
function createBoxes(amount) {
  amount = inputEl.value;
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');
    element.style.backgroundColor = getRandomHexColor();
    element.style.width = size + 'px';
    element.style.height = size + 'px';
    size += 10;
    console.log(element);
    boxes.appendChild(element);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
  size = 30;
}
