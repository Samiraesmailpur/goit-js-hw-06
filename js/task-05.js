const inputFormEl = document.querySelector('#name-input');
const titleEl = document.querySelector('#name-output');

inputFormEl.addEventListener('input', e => {
  titleEl.innerHTML = e.target.value;

  if (inputFormEl.value == '') {
    titleEl.innerHTML = 'Anonymous';
  }
});
