// 048 Прототипы
function Product(brand, price, discount) {
    // 1. Создает новый объект
    // 2. на этот объект создается ссылка
    // 3. возвращает это объект
    console.log(this);
    this.brand = brand;
    this.price = price;
    this.discount = discount;
}

// Перемещение в прототип метода getPriceWithDiscount
Product.prototype.getPriceWithDiscount = function() { // вызов в консоли apple.getPriceWithDiscount()
    return (this.price * (100 - this.discount)) / 100;
};

// Запись нового метода в прототип
Product.prototype.setPrice = function(newPrice) {
    this.price = newPrice;
}

const apple = new Product('Apple', 100, 15);
const samsung = new Product('Samsung', 90, 14);
console.log(apple);
console.log(samsung);
