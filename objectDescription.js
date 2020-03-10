// Object description

const car = {
    brand: 'Audi',
    year: 2019,
    // get age() { // Аналогичная запись как 16-18
    //     return `Машина выпущена в ${this.year}`;
    // },
    set age(value) { // переопределение свойства year - car.age = 2020;
        this.year = value;
    },
};

Object.defineProperty(car, /*'year'*/ 'age', { // defineProperty() - метод определяет настроки и свойства объекта
    // configurable: false, // изменение свойства 'year' у объекта car, в т.ч. удаление - ЗАПРЕЩЕНО. Перезапись возможна
    // enumerable: false, // Object.keys(car); - ключ year не отображается. Перезапись значения ключа year возможна
                       // car.propertyIsEnumerable('year'); - проверка на перебираемость свойства
    // writable: false, // запрет на перезапись значения у свойства. Возможно удаление
    // get: function() { // добавиться поле age с методом get - вызов будет car.age;
    //     return `Машина выпущена в ${this.year}`;
    // }
});

// defineProperty(o: any, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): any;

// interface PropertyDescriptor {
//     configurable?: boolean;
//     enumerable?: boolean;
//     value?: any;
//     writable?: boolean;
//     get?(): any;
//     set?(v: any): void;
// }

// Object.defineProperty(car, 'year', {
//     enumerable: false, // если configurable: false, - то изменение вызовет ошибку
// });


Object.defineProperty(window, 'globalLet', { // для нахождения источника ошибки и вызов дебаггера на переменную globalLet
    set: function(value) {
        console.log(value);
        // debugger;
    },
});

function foo() {
    globalLet = 10;
}

foo();

