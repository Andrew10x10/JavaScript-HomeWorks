'use strict';


const userChoice = prompt('what do you like to do ? for example : Addition, Subtraction, Multiplication, Division');

const first = Number(prompt('Please enter the first number'));
const second = Number(prompt('Please enter the first number'));

const add = first + second;
const sub = first - second;
const mul = first * second;
const div = first / second;

// let operation
// let result

if (userChoice === 'Addition' || userChoice === 'add' || userChoice === '+') {
    alert(first + ' + ' + second + ' = ' + add);
    // result = first + second;
    // operation = '+'
} else if (userChoice === 'Subtraction' || userChoice === 'sub' || userChoice === '-') {
    alert(first + " - " + second + ' = ' + sub);
    // result = first - second;
    // operation = ' - '
} else if (userChoice === 'Multiplication' || userChoice === 'mul' || userChoice === '*') {
    alert(first + ' * ' + second + ' = ' + mul);
    // result = first * second;
    // operation = '*'
} else if (userChoice === 'Division' || userChoice === 'div' || userChoice === '/') {
    alert(first + ' / ' + second + ' = ' + div);
    // result = first / second;
    // operation = '/'
} else {
    alert('Видимо произошла ошибка ')
}
// console.log(first, operation, second, ' = ', result)