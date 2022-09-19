const inputFormEl = document.querySelector("#validation-input");

inputFormEl.addEventListener("blur", function () {
  console.log(this.value.length);

  if (this.value.length == this.dataset.length) {
    inputFormEl.classList.add("valid");
    inputFormEl.classList.remove("invalid");
  } else {
    inputFormEl.classList.add("invalid");
    inputFormEl.classList.remove("valid");
  }
});
