const user = {
    firstName: 'Pavel',
    lastName: 'Pishchalau',
    age: 35,
    isAdmin: true,
    email: 'test@test.com',
    'user-addres': {
        city: 'Minsk'
    },
    skills: ['html', 'scss', 'js']
}

let value;

let prop = 'email';
// доступ к вложенным свойствам объекта
value = user.firstName;
value = user['isAdmin'];
value = user['user-addres'];
value = user['user-addres'].city;
value = user[prop]; // будет отображено значение ключа email

// Перезапись свойств в объекте
user.firstName = 'Pall';
user['user-addres'].city = 'Moscow'; // перезапись свойства вложенного объекта

// Добавление поля в объект
user.info = 'some info';
user['user-addres'].street = 'Leningradskaya'; // добавление поля во вложенный объект

// Добавление поля во вложенный объект НЕСУЩЕСТВУЮЩЕГО свойства
user.plan.basic = 'basic'; // Error


value = user.firstName;

console.log(user);

console.log(value);

