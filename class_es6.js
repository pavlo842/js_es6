// Клыссы ES6
const newMethod = 'setPrice';
class ProductES {
    // Если класс при вызове будет принимать аргументы, то надо создать конструктор
    constructor(brand, price, discount) {
        this._brand = brand,
        this.price = price,
        this.discount = discount
    }

    // Геттеры и сетторы
    get brand() { // newProduct.brand
        return this._brand;
    }

    set brand(name) { // newProduct.brand = 'T1'
        this._brand = name;
    }

    // Все методы автоматически попадают в прототип
    getPriceWithDiscount() {
        return (this.price * (100 - this.discount)) / 100;
    }

    setPrice(newPrice) {
        this.price = newPrice;
    }

    // Статические методы - могут вызываться отдельно от экземпляра класса - НЕ ВЫЗЫВАЕТСЯ В ЭКЗЕМПЛЯРЕ. Не имеют доступ к this
    // Вызов PrsetPriceoductES.plus(1, 3)
    static plus(x, y) {
        return x + y;
    }

    // Вычисляемы свойства в классах
    [newMethod](newPrice) { // [newMethod] = переменная в кторой храниться 'setPrice' - стр 2. Аналогично стр 16-18
        this.price = newPrice;
    }
}

const newProduct = new ProductES('Apple', 200, 10);
