// 027 Обработка событий

const btn = document.querySelector('button');

const link = document.querySelector('a');

// console.dir(btn);

// btn.onclick = function () {
//     console.log('click');
// }

// Универсальный способ нескольких обработок события
// 1-й обработчик события
// btn.addEventListener('click', function() {
//     console.log('click');
// });

// btn.addEventListener('click', function(event) {
//     console.log(event);
// });

// 2-й обработчик события
// btn.addEventListener('click', function() {
//     console.log('click2');
// });

// btn.addEventListener('click', e => {
//     console.log(this);
//     console.log(e);
// });



// link.addEventListener('click', function(e) {
//     e.preventDefault(); // вывод события, но без срабатывания ссылки
//     console.log('click');
// });


// function clickHandler(e) {
//     console.log(this);
//     e.preventDefault();
//     console.log('click');
// }

// link.addEventListener('click', clickHandler);

// link.removeEventListener('click', clickHandler); // удалить событие

const container = document.querySelector('.container');

btn.addEventListener('click', e => {
    const div = document.createElement('div'); // создание элемента div
    const nestedBtn = document.createElement('button'); // создание элемента button
    div.textContent = Math.random(); // добавление текста в созданный div
    nestedBtn.textContent = 'button'; // добавление текста в созданную кнопку 
    div.appendChild(nestedBtn); // добавление кнопки в div элемент
    container.appendChild(div); // добавление div эелемента в html разметку
});

container.addEventListener('click', (e) => {
    console.log(e.target);
    console.dir(e.target);
    if(e.target.tagName === 'BUTTON') {
        console.log('Button clicked'); // Сообщение будет выводиться только при нажатии на BUTTON     
    }
});
