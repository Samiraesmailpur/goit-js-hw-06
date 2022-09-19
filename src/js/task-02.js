const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let itemsArray = [];

ingredients.forEach((element) => {
  const item = document.createElement("li");
  item.textContent = element;
  item.classList.add("item");

  itemsArray.push(item);
});

document.querySelector("#ingredients").append(...itemsArray);

console.log(itemsArray);
