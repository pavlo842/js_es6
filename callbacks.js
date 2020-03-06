// Callbacks

// const arr = ['Pallo', 'Hallo', 'Mallo', 'Tallo'];

// let newArr = [];

// Длина каждого элемента массива
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i].length);
// }
// console.log(newArr);

// Каждый элемент массива в верхнем регистре
// let newArr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr2.push(arr[i].toUpperCase());    
// }
// console.log(newArr2);

// Функция высшего порядка
const names = ['Pallo', 'Hallo', 'Mallo', 'Tallo'];

function mapArray(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]));    
    }
    return res;
}

function nameToUpperCase(el) {
    return el.toUpperCase();
}

function nameLength(el) {
    // console.log(el);
    return el.length;
}

const result = mapArray(names, nameLength);
const result2 = mapArray(names, nameToUpperCase);
// console.log(result);
// console.log(result2);



function greeting(firstName) {
    return function(lastName) {
        return `Hello, ${firstName} ${lastName}`
    };
}
// 1-й вариант вызова функции
// const testGreeting = greeting('Pallo');
// const fullname = testGreeting('Pallov');
// 2-й вариант вызова функции
const fullname = greeting('Pal')('Pallov');
// console.log(fullname);



function question(job) {
    const jobDictionary = {
        developer: 'whats to f...?',
        teacher: 'f... off!',
    };
    return function(name) {
        return `${name}, ${jobDictionary[job]}`
    }

    // if(job === 'developer') {
    //     return function (name) {
    //         return `${name}, whats to f...?`;
    //     };
    // } else if (job === 'teacher') {
    //     return function (name) {
    //         return `${name}, f... off!`
    //     };
    // }
}

const developerQuestion = question('developer');
console.log(developerQuestion('Palka'));

const teacherQuestion = question('teacher');
console.log(teacherQuestion('Kalka'));