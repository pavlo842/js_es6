// 050 Классы ES6

const newMethod = 'setPrice'; // название метода для стр.20

class ProductES {
    constructor(brand, price, discount) {
        this._brand = brand,
        this.price = price,
        this.discount = discount
    }

    get brand() {
        return this._brand;
    }

    set brand(name) {
        this._brand = name;
    }

    getPriceWithDiscount() {
        return (this.price * (100 - this.discount)) / 100;
    }

    // setPrice(newPrice) {
    //     this.price = newPrice;
    // }

    [newMethod](newPrice) { // генерирование названия метода из переменной
        this.price = newPrice;
    }

    static plus(x, y) {
        return x + y;
    }

}

const newProduct = new ProductES('Samsung', 200, 10);

newProduct.setPrice(100);

console.log(newProduct);

