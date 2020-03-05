// while, do while

// let i = 0;
// while(i++ < 10) {    // пока true
//     console.log(i); // тело цикла выполняется
//     // i++;    
// }

let i = 10;
while(i--) {    // пока true
    // console.log(i); // тело цикла выполняется 
}

do { // сначало выполняется действие
    // console.log('action');
} while (i > 0); // потом проверка


// for
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        // continue; // пропуск 5
        break; // остановиться на 4
    }
    // console.log(i);
}

let str = 'Hello';
let res = '';

for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    res += str[i];
}
// console.log(res);

let colors = ['white', 'black', 'yellow', 'orange'];

for (let i = 0; i < colors.length; i++) {
    // console.log(colors[i]);
    colors[i] = colors[i].toUpperCase();
}
// console.log(colors);

// Перебор массива объектов
const users = [
    {
        name: 'Pavel',
        age: 35,
    },
    {
        name: 'Mike',
        age: 36,
    },
    {
        name: 'Olga',
        age: 25,
    },
    {
        name: 'Tanya',
        age: 26,
    }
];

const userObj = {};

for (let i = 0; i < users.length; i++) {
    // console.log(users[i].name);
    // console.log(users[i].age);
    userObj[users[i].name] = users[i]; // Создание в userObj поля с названием ключа объекта и запись объекта в userObj
}
// console.log(userObj);
// console.log(userObj['Pavel']);

// for of, for in
const user = {
    name: 'Pavel',
    age: 35,
};


for (let key in user) {
    // console.log(key);
    // console.log(user[key]);
}

for (let value of users) {
    console.log(value);
}
