// Тернарный оператор. Switch case

let a =1;
let b = 0;


// if (a > 0) {
//     b = a;
// } else {
//     b += 1;
// }

// console.log(b);

// выражение ? если true : если false;
b = a > 0 ? a : b + 1;
// выражение ? если true : выражение ? если true : если false;
b = a > 0 ? 2 : a < 0 ? 3 : 0;

// console.log(`b: ${b}`);

// Switch case

let color = 'yellow';

switch (color) {
    case 'yellow':
        console.log('Color is yellow');    
        break;
    case 'red':
        console.log('Color is red');        
        break;
    default:
        console.log('Default');
        break;
}
