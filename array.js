// Методы массивов
const numArr = [2, 32, 1234, 54, 323];

let value;

value = numArr.length; // длина массива

value = Array.isArray(numArr); // проверка массива на true || false

value = numArr[2]; // получить элемент по индексу

numArr[2] = 12; // перезапись элемента массива другим значением

value = numArr.indexOf(32); // вернет индекс на котором встречается элемент массива

// Добавление/удаление элементов в/из массива
// push/pop - добавление/удаление элемента в/из конца массива
value = numArr.push(100); // добавлен в конец 100
value = numArr.pop(); // удаление элемента с конца массива и возврат его

// shifh/unshift - удаление/добавление элемента в/из начало массива
value = numArr.unshift(100); // добавлен в начало 100
value = numArr.shift(); // удаление элемента с начала массива и возврат его


// value = numArr.slice(0, 2); // обрезает и возвращает элементы массива по заданным параметрам - с 0 по 2 (не включительно) индексы

// value = numArr.splice(1, 1, 'One', 'Two'); // удаляет и возвращает элементы массива (количество после запятой - если поставить 0, то ничего не удаляет) начиная с индекса (до запятой).
                                           // Третий параметр - вставка в массив, на место удаленного элемента

// value = numArr.reverse(); // Переворачивает зеркально элементы массива - массив изменяется

value = numArr.concat(numArr); // Создается копия + добавляется в конец скопированный массив. Можно добавить в concat любые значения
// value = [].concat(1, 2, 3); // создание массива и запись в него значений из скобок


value = numArr.join(); // Вернет значения массива через запятую
value = numArr.join(" "); // Вернет значения массива через пробел
value = numArr.join("-"); // Вернет значения массива через дефис

value = 'hello world'.split(); // Создается массив из строки ["hello world"]
value = 'hello world'.split(""); // Создается массив из строки ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]

console.log(value, numArr);

