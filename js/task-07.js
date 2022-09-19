const inputFormEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputFormEl.addEventListener('input', function (event) {
  spanEl.style.fontSize = event.currentTarget.value + 'px';
});
