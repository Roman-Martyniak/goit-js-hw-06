const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ulEl = document.querySelector('#ingredients');
const elements = ingredients.map(element => {
  let createLi = document.createElement('li');
  createLi.textContent = element;
  return createLi;
});

console.log(ulEl);
ulEl.append(...elements);
