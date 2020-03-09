// Перебирающие методы массивов

const users = [
    {
      _id: "5cdce6ce338171bb473d2855",
      index: 0,
      isActive: false,
      balance: 2397.64,
      age: 39,
      name: "Lucile Finley",
      gender: "female",
      company: "ZOXY",
      email: "lucilefinley@zoxy.com",
      phone: "+1 (842) 566-3328",
      registered: "2015-07-12T09:39:03 -03:00"
    },
    {
      _id: "5cdce6ce0aa8d071fa4f4cc5",
      index: 1,
      isActive: true,
      balance: 2608.48,
      age: 33,
      name: "Woodward Grimes",
      gender: "male",
      company: "FORTEAN",
      email: "woodwardgrimes@fortean.com",
      phone: "+1 (960) 436-3138",
      registered: "2014-09-08T03:24:39 -03:00"
    },
    {
      _id: "5cdce6ce103de120d32d6fe4",
      index: 2,
      isActive: true,
      balance: 1699.99,
      age: 25,
      name: "Robinson Coleman",
      gender: "male",
      company: "GENMOM",
      email: "robinsoncoleman@genmom.com",
      phone: "+1 (852) 543-3171",
      registered: "2019-04-23T08:24:58 -03:00"
    },
    {
      _id: "5cdce6cebada7a418d8ccb3d",
      index: 3,
      isActive: true,
      balance: 2621.84,
      age: 25,
      name: "Austin Benton",
      gender: "male",
      company: "ZILIDIUM",
      email: "austinbenton@zilidium.com",
      phone: "+1 (977) 573-2627",
      registered: "2016-08-02T10:08:24 -03:00"
    },
    {
      _id: "5cdce6ced81fe99596d9cef5",
      index: 4,
      isActive: true,
      balance: 1297.31,
      age: 37,
      name: "Casandra Stout",
      gender: "female",
      company: "ANACHO",
      email: "casandrastout@anacho.com",
      phone: "+1 (929) 465-3804",
      registered: "2018-04-14T11:27:26 -03:00"
    },
    {
      _id: "5cdce6ce6c3ae6c4d6f39e88",
      index: 5,
      isActive: false,
      balance: 2165.49,
      age: 20,
      name: "Valencia Carrillo",
      gender: "male",
      company: "XEREX",
      email: "valenciacarrillo@xerex.com",
      phone: "+1 (977) 522-3378",
      registered: "2014-02-14T11:45:27 -02:00"
    }
];
  
// forEach - перебор массива
users.forEach((user, i, arr) => { // user - элемент массива, i - индекс, arr - массив
    // console.log(user, i, arr);
});
// тоже правильный вариант
users.forEach(user => { // user - элемент массива
    // console.log(user);
});

// filter - фильтрация
const userLess30 = users.filter(user => user.age < 30); // принимает user, i, arr
console.log(userLess30);
const activeUsers = users.filter(user => user.isActive); // isActive - можно просто указать isActive, а можно isActive == 1, а также isActive === true
console.log(activeUsers);

// map - создание нового массива и передача в него результата callback-функции
const userName = users.map((user) => user.name);
// console.log(userName); // ["Lucile Finley", "Woodward Grimes", "Robinson Coleman", "Austin Benton", "Casandra Stout", "Valencia Carrillo"]

const userNameAge = users.map((user) => ({
    name: user.name,
    age: user.age
}));
// console.log(userNameAge); // [{name: "Lucile Finley", age: 39}, ....]

// reduce - развернуть массив, преобразовать, посчитать
const totalBalance = users.reduce((acc, user, i, arr) => {
    console.log(acc);
    return (acc += user.balance);
}, 0); // 1-й аргумент callback-функция, 2-й стартовое значение (по умолчанию - 1-й элемент массива)
// acc - accumulator результат предыдущей операции, user - элемент массива, i - индекс, arr - массив
console.log(totalBalance);

16-59
// some/every
// sort
// find



