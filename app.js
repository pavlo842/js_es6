// 003

// comments

//      single line

/*
        multi-line
*/

/**
 *      JSDoc comments
 */

 // Data types
/** 1. Primitives
 *      1-1. Number - 123, 123.123, NaN, Infinity 
 *      1-2. String - "Hello", 'Hello', for variable -> `Hello`
 *      1-3. Boolean - true, false
 *      1-4. Null - null
 *      1-5. Undefined - undefined
 *      1-6. Symbol() - for uniq identifier // example - console.log(Symbol());
 * 
 *  2. Objects - reference type (ссылочный)
 *      2-1. Object - { name: 'Pit', age; 25 } // example - console.table({});
 *      2-2. Array - [1, 2, 3]
 *      2-3. Function - function foo() {}
 *      2-4. Date - new Date();
 *  */  





// 005 conversion data type

let value;

value = 10;
console.log(value);
console.log(typeof value); // typeof - к какому типу данных относиться


// явное преобразование
// Number to string

value = String(10);
value = String(10 + 10);
value = (50).toString();


// Boolean to string

value = (50).toString();
value = String(true);


// array to string

value = String([1, 2, 3]);


// Object to string

value = String({name: "Pallo"});

// неявное преобразование к строке
value = 30 + ''; // при сложении со строкой, любой тип данных будет преобразован к строке
value = 30 - '5'; // при вычитании, сложении, делении строки из number преобразование к number

value = true + 10; // преобразование к number, т.к. true = 1
value = false + 10; // преобразование к number, т.к. false = 0


// String to number
// явное преобразование
value = Number('23');
value = Number(true); // 1
value = Number(false); // 0
value = Number(null); // 0
value = Number('false'); // NaN
value = Number([1, 2, 3]); // NaN

value = parseInt('200'); // number - 200
value = parseInt('200dvsfggs'); // number - 200
value = parseInt('sdgfstdy200'); // NaN

value = parseFloat('200.200');


// Boolean
value = Boolean('dd'); // true
value = Boolean(''); // false

value = Boolean(100); // true
value = Boolean(-100); // true
value = Boolean(0); // false
value = Boolean(undefined); // false
value = Boolean(false); // false
value = Boolean({}); // true
value = Boolean([]); // true



console.log(value);
console.log(typeof value);

