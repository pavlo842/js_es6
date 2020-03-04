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
value = lastName.indexOf('p'); // поиск заданного символа - найдет индекс с которого начинается буква p, если вернулось -1 то значит не найден символ

value = lastName.includes('s'); // true - символ есть в строке, false -символ в строке отсутствует

// метод для работы с подстрокой
value = lastName.slice(0, 5); // вернет только символы начиная с 0 и по 4 включительно
value = lastName.slice(1); // вернет только символы начиная с 1 индекса и по последний включительно
value = lastName.slice(0, -2); // вернет только символы начиная с 0 индекса и до -2 индекса

value = lastName.replace('Plllpls', 'Pahho hello'); // Замена одной строки на другую

console.log(value);
