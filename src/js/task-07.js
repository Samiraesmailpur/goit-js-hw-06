const inputFormEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputFormEl.addEventListener("input", function (event) {
  span.style.fontSize = event.currentTarget.value + "px";
});
