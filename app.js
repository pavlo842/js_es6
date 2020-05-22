// call stack

console.log(1);         // 1
console.log(2);         // 2
console.log(3);         // 3
// Все setTimeout будут выполняться после отстальных вызовов
setTimeout(() => {
    console.log(4);     // 7
    setTimeout(() => {
        console.log(5); // 8
    }, 0);
}, 0);
console.log(6);         // 4

function a() {
    // debugger; // дебаггер в консоли = точка остановы
    console.log('a');
}

function b() {
    console.log('b');
}

a();                    // 5
b();                    // 6
