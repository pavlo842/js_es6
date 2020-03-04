// Шаблонные строки

const firstName = 'Pavel';
const lastName = 'Pishchalau';
const age = 35;

let str;

// ES5
str = 'Hello, my name is ' + firstName + ' ' + lastName;

str = '<ul>' + 
      '<li>First name: ' + firstName + '</li>' +
      '<li>Last name: ' + lastName + '</li>' +
      '<li>Age: ' + age + '</li>' + 
      '</ul>';

// console.log(str);

document.body.innerHTML = str;

// ES6
str = `
    <ul>
        <li>First name: ${firstName}</li>
        <li>Last name: ${lastName}</li>
        <li>Age: ${age}</li>
        <li>Math.random: ${Math.random()}</li>
    </ul>
`;

document.body.innerHTML = str;
console.log(str);

