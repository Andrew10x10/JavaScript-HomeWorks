'use strict';
// первый вариант
//
// const first = prompt('Please enter the first number');
// const second = prompt('Please enter the second number');
// console.log(typeof first);
// console.log(typeof second);
//
// const number1 = Number(first);
// const number2 = Number(second);
// console.log(typeof number1);
// console.log(typeof number2);

const first = +prompt('Please enter the first number');
const second = +prompt('Please enter the second number');

alert('Это ваш ответ: '+ (first+second) + ' (сложение)');
alert('Это ваш ответ: ' + (first - second) + ' (вычетание)');

alert('Это ваш ответ: ' + first * second + ' (умножение)');
alert('Это ваш ответ: ' + first / second + ' (деление)');