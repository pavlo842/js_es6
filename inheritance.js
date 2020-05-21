// inheritance - Наследование ES5

// function Product(brand, price, discount) {
//     // 1. Создает новый объект
//     // 2. на этот объект создается ссылка
//     // 3. возвращает это объект
//     console.log(this);
//     this.brand = brand;
//     this.price = price;
//     this.discount = discount;
// }

// // Перемещение в прототип метода getPriceWithDiscount
// Product.prototype.getPriceWithDiscount = function() { // вызов в консоли apple.getPriceWithDiscount()
//     return (this.price * (100 - this.discount)) / 100;
// };

// // Запись нового метода в прототип
// Product.prototype.setPrice = function(newPrice) {
//     this.price = newPrice;
// }

// const apple = new Product('Apple', 100, 15);
// const samsung = new Product('Samsung', 90, 14);
// console.log(apple);
// console.log(samsung);


// =====================================================================
// Object.create
const protoForObj = {
    sayHello() {
        return 'Hello world';
    }
}

// Создание объекта и запись в его proto метода
const obj = Object.create(protoForObj,
    // запись в объект поля и значения
    {
        name: {
            value: 'Pallo',
    },
});


// ======================================================================
// Непосредственно наследование
// функциональное

// Функция-конструктор User - далее в ES6 класс
function User(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName
}

// Создание в прототипе User методов
User.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

User.prototype.sayHello = function() {
    return `Hello ${this.firstName} ${this.lastName}`;
}

// Создание объекта user
const user = new User('Pallo', 'Pallowel');


// Customer
// Функция-конструктор Customer - далее в ES6 класс
function Customer(firstName, lastName, membership) {


    // ======   Функционально наследование   ==========
    // User.call(this, firstName, lastName); // Унаследовалась функциональность функции-конструктора User
    User.apply(this, arguments); // Унаследовалась функциональность функции-конструктора User - с apply  можно больше параметров передавать
    // ======   Функционально наследование   ==========


    this.membership = membership;
    // Методы прототипа не унаследуються - надо отдельно наследовать
}

// ===========      Прототипное наследование         ===================
// Наследование прототипа User.
// ==========  Теряется конструктор Customer
Customer.prototype = Object.create(User.prototype);
// ===========      Прототипное наследование         ===================

// Возвращение конструтора для Customer
Customer.prototype.constructor = Customer;
// После предыдущих двух строк можно записать в прототип Customer своих методов
Customer.prototype.getMembership = function() {
    return this.membership.toUpperCase();
}

const customer = new Customer('Igor', 'Igorov', 'basic');
