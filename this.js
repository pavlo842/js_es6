// this

function getThis() {
    console.log(this); // this на глобальный объект window
}
// getThis();

// window.getThis(); // аналогичный вызов что и в 6

// console.log(window.getThis);

function getPrice(currency = '$') { // вынос функции getPrice из объекта prod1 наверх
    console.log(currency + this.price); // this указывает на объект prod1
    return this;
}

function getName() { // вынос функции getName из объекта prod1 наверх
    console.log(this.name); // this указывает на объект prod1
    return this;
}

const prod1 = {
    name: 'Intel',
    price: 100,
    getName,
    // getName() { // метод объекта
    //     console.log(this.name);
    // },
    getPrice, // после выноса функции getPrice из объекта prod1 наверх сдесь записывается в свойство - если одинокые имена, то можно одним словом
    // getPrice: function () {
    //     console.log(this.price); // this указывает на объект prod1
    // },
    info: {
        information: ['2.3ghz'],
        getInfo: function () {
            // console.log(this); // this указывает на объект info
        }
    },
};

// prod1.getPrice();
// prod1.info.getInfo();
// prod1.getName();


const prod2 = {
    name: 'AMD',
    price: 50,
    getPrice,
}

// prod2.getPrice(); // вызов функции getPrice в контексте объекта prod2
prod2.getName = prod1.getName; // передача метода getName из объекта prod1 в объект prod2
// prod2.getName();



// цепочки вызовов
// каждый метод возвращает объект со своими методами
let str = 'Hello world';
const reversStr = str
    .split('') // ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
    .reverse() // ["d", "l", "r", "o", "w", " ", "o", "l", "l", "e", "H"] - перевернутый массив
    .join(''); // dlrow olleH
// console.log(reversStr);

const prod3 = {
    name: 'ARM',
    price: 20,
    // getPrice,
    // getName,
}

// prod3
//     .getName() // undefined - если у метода нету return this;
//     .getPrice(); // undefined.getPrice() - если у метода нету return this;
    // будет работать если у объекта есть соответствующие методы

// CALL
// getPrice.call(prod3, '*'); // вызов функции getPrice в контексте (call) объекта prod3. 
//'*' - второй аргумент который будет подставлен вместо $ (параметр/аргумент функции getPrice). Аргументы передаються через запятую
// первым аргументом обязательно должен идти контекст (prod3) или null

// getPrice.apply(prod3, ['*']); // тоже самое что и call но параметры передаются в массиве

// Потеря контекста
const prod4 = {
    name: 'NVIDIA',
    price: 200,
    getPrice,
    // getName,
}

setTimeout(prod4.getPrice, 1000); // неправильный вызов - потеря контекста

const getPriceBind = prod4.getPrice.bind(prod4, '+'); // bind - возвращает функцию с приязанным контекстом (prod4)
console.log(getPriceBind);
setTimeout(getPriceBind, 1000); // неправильный вызов - потеря контекста
