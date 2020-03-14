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
// console.log(div1);


// BOM
// https://learn.javascript.ru/browser-environment



// 025

// Получить родительский элемент или ближайшего родителя
console.log(div.parentElement); // родитель (body) у первого div элемента страницы

const link = div.querySelector('.link'); // получение ссылки у первого дива
console.log(link.parentElement); // ссылка с родительским элементом - возврат прямого родителя

console.log(link.closest('.content')); // ссылка с родительским элементом с классом .content - возрат ближайшего родителя с классом .content

// работа с атрибутами - работа с классами

console.log(div.classList); // объект classList у div-элемента с вложенными свойствами

div.classList.add('article', 'custom'); // добавить два новых класса в ближайший div

div.classList.remove('article'); // удаление у ближайшего div-элемента класса article

// проверить наличие класса у элемента - комманда в консоли
// div.classList.contains('custom');

// переключение классов - комманда в консоли
// div.classList.toggle('toggle'); // первое выполнение true - класс добавлен, второе выполнение false - класс убран

// вывод всех классов элемента - комманда в консоли
// div.className;

console.dir(link); // объект ссылки
console.log(link.href); // путь ссылки

// установить аттрибут со значением
div.setAttribute('id', 'myId'); // id - аттрибут myId - занчение аттрибута

// проверить наличие - в консоли
// div.id;
div.hasAttribute('id');

// перезаписать
div.id = 'myId2';

// получить аттрибут
console.log(div.getAttribute('id'));

// удаление аттрибута
// div.removeAttribute('id');



// работа с кастомным аттрибутом
div.dataset;
