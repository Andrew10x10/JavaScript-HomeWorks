'use strict';

const userChoice = prompt('what do you like to do ? for example : Addition, Subtraction, Multiplication, Division');
const firstNum = Number(prompt('Please enter the first number'));
const secondNum = Number(prompt('Please enter the first number'));

strangeCalculator(userChoice,firstNum,secondNum)

function strangeCalculator(userChoice, value1, value2) {

    const add = value1 + value2;
    const sub = value1 - value2;
    const mul = value1 * value2;
    const div = value1 / value2;

    if (userChoice === 'Addition' || userChoice === 'add' || userChoice === '+') {
        alert(value1 + ' + ' + value2 + ' = ' + add);
    } else if (userChoice === 'Subtraction' || userChoice === 'sub' || userChoice === '-') {
        alert(value1 + " - " + value2 + ' = ' + sub);
    } else if (userChoice === 'Multiplication' || userChoice === 'mul' || userChoice === '*') {
        alert(value1 + ' * ' + value2 + ' = ' + mul);
    } else if (userChoice === 'Division' || userChoice === 'div' || userChoice === '/') {
        alert(value1 + ' / ' + value2 + ' = ' + div);
    } else {
        alert('Видимо произошла ошибка ')
    }
}