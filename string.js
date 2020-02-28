// Строки

const firstName = 'Pl';
const lastName = 'Plllpls';
const age = 35;
const str = 'Hello';

let value;

value = firstName + ' пробел ' + lastName;

value += ' i am ' + age;

value = firstName.length; // Длина строки
value = firstName[1];     // Второй символ

// получить последний элемент строки
value = lastName[lastName.length - 1];

// методы для работы со строками
value = lastName.toLocaleUpperCase(); // все символы к вернему регистру
value = firstName.concat(' ', lastName); // сложение строк

value = lastName.indexOf('l', 1); // поиск заданного символа - после запятой индекс с которого начать поиск

console.log(value);

