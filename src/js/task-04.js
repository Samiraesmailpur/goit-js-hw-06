const targetBtnEl = document.querySelector("#value");
const addtargetBtnEl = document.querySelector('[data-action="increment"]');
const removetargetBtnEl = document.querySelector('[data-action="decrement"]');

let counterValue = 0;
addtargetBtnEl.addEventListener("click", () => {
  counterValue += 1;
  console.log(counterValue);
  targetBtnEl.innerHTML = counterValue;
});

removetargetBtnEl.addEventListener("click", () => {
  counterValue -= 1;
  console.log(counterValue);
  targetBtnEl.innerHTML = counterValue;
});
