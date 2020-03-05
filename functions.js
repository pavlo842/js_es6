// Функции

// function declaration
// sayHello(); // вызов функции доступен в любом месте
function sayHello(firstName = 'Default', lastName = 'Default_1') { // Default - параметр по умолчанию (default setting)
    // console.log(firstName, lastName);
    // console.log('Hello world');
    if (!firstName) {
        // return console.error("ERROR");
        ;
    }
    return `Hello ${firstName} ${lastName}`;
    // после return функция прекращает свою работу и дальнейший код выполняться не будет
}
let res = sayHello('Pavel', 'Pavlov') + '!';

let res1 = sayHello();

// console.log(res);
// console.log(res1);

// Область видимости

let x = 10; // Глобальная переменная

// 1-я функция
// function foo() {
//     let x = 20; // Локальная переменная - если объявлена переменная внутри функции то глобальная не будет изменена
//     x = 20; // перезаписана глобальная переменная
//     console.log(x);
// }

// 2-я функция
// function foo(x) { // фактически объявление переменной
//     x = 20;
//     console.log(x);
//     return x;
// }

// foo();
// console.log(x);


const user = {
    name: 'Pavel',
    age: 35
};

function getObj(obj) {
    // console.log(obj);
    obj.name = 'Nat';
}

getObj(user);
// console.log(user);



// function expression - вызов только после объявления
const square = function(x) {
    return x * x;
};

(function (msg) {
    console.log(msg);
})('Hello') // самовызывающаяся анонимная функция

