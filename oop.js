// 047 Введение в ООП. Функции контрукторы

const pavel = {
    name: 'Pavel',
    age: 35
}

const str = new String('Hello world');

// console.log(str);

// функция конструктор
// по соглашение пишуться с большой буквы
function Product(brand, price, discount) {
    // 1. Создает новый объект
    // 2. на этот объект создается ссылка
    // 3. возвращает это объект
    console.log(this);
    this.brand = brand;
    this.price = price;
    this.discount = discount;
    this.getPriceWithDiscount = function() { // вызов в консоли apple.getPriceWithDiscount()
        return (this.price * (100 - this.discount)) / 100;
    };
}

const apple = new Product('Apple', 100, 15);
const samsung = new Product('Samsung', 90, 14);
console.log(apple);
console.log(samsung);

