// DOM

const div = document.querySelector('div'); // получить ближайший div

const titles = document.querySelectorAll('h1');

// console.log(div);
// console.dir(div); // просмотреть как объект

// console.log(titles);
// console.dir(titles);
// console.log(Array.from(titles));
// console.log([...titles]); // получить Nodelist как массив

// Получение соседних, вложенных, рядом стоящих, дочерних элементов
const div1 = document.querySelector('div').nextElementSibling; // в консоли брайзера div.nextElementSibling
console.log(div1);


// BOM
// https://learn.javascript.ru/browser-environment
