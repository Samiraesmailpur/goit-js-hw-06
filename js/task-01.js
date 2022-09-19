const itemEl = document.querySelectorAll('.item');
console.log('Number of categories: ' + itemEl.length);

itemEl.forEach(element => {
  const title = element.querySelector('h2').textContent;

  const liEl = element.querySelectorAll('li');

  console.log(`Category: ${title} \nElements: ${liEl.length}`);
});
