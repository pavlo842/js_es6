// 026 *Манипуляция DOM

const title = document.querySelector('h1');

// title.innerHTML = '<span>text</span>'; // перезапись содержимого h1

// title.textContent = 'new text'; // перезапись содержимого h1 - замена только текста - тег остается не тронутым


// вставить тег

// title.insertAdjacentHTML('beforebegin', '<h2>Title H2</h2>'); // 1-й параметр - 4 позиции beforebegin, afterbegin, beforeend, afterend. 2-й параметр - тег который будет вставлен в DOM

// title.insertAdjacentElement(); // аналог insertAdjacentHTML

// title.innerHTML += '<span>new text</span>'; // доабавление к h1 тескт


// Создание эелемента - МОЖЕТ БЫТЬ ТОЛЬКО В ОДНОМ ЭКЗЕМПЛЯРЕ
const span = document.createElement('span'); // создание элемента span
span.textContent = 'span element created'; // добавление текста в span элемент
span.classList.add('classSpan'); // добавление класса в span элемент
title.appendChild(span); // запись элемента span в html разметку

console.log(span);

// Создание элементов через фрагмент - много элементов собираются в фрагнмент и добавляются в html разметку одним пакетом
const fragment = document.createDocumentFragment();
const colors = ['grey', 'yellow', 'red'];
colors.forEach((color) => {
    const item = document.createElement('div'); // создание дива
    item.classList.add(`bg-${color}`); // добавление класса
    item.style.background = color; // добавление цвета фона
    item.textContent = color; // добавление текстового обозначения цвета
    fragment.appendChild(item); // запись в переменную fragment результата того что выше
});
document.body.appendChild(fragment); // добавление в разметку
// Уаление элементов со страницы
// title.remove();



// console.log(fragment);



