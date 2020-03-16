// 047 Введение в ООП. Функции контрукторы

const pavel = {
    name: 'Pavel',
    age: 35
}

const str = new String('Hello world');

// console.log(str);

// функция конструктор

function Product(brand, price, discount) {
    console.log(this);
    this.brand = brand;
    this.price = price;
    this.discount = discount;
    this.getPriceWithDiscount = function() { // вызов в консоли apple.getPriceWithDiscount()
        return (this.price * (100 - this.discount)) / 100;
    };
}

const apple = new Product('Apple', 100, 15);
console.log(apple);

13.50