'use strict';
let first = Number(prompt("Введите первое число."));
let second = Number(prompt("Введите второе число."));

function sum(first, second) {
    let result = (first + second);
    console.log("Результат: " + first, '+ ' + second, ' = ' + result);
    return result;
}

sum(first, second);

function subtraction(first, second) {
    let result = first - second;
    console.log("Результат: " + first, '- ' + second, ' = ' + result);
    return result;
}

subtraction(first, second);

function multiplication(first, second) {
    let result = first * second;
    console.log("Результат: " + first, '* ' + second, ' = ' + result);
    return result;
}

multiplication(first, second);

function division(first, second) {
    let result = first / second;
    console.log("Результат: " + first, '/ ' + second, ' = ' + result);
    return result;
}

division(first, second);
