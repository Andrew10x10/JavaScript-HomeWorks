'use strict';

// 1 задание
// const x = 10;
// const y = 7;
// let xy = x > y ? ("x больше, чем y") : ("x не больше, чем y");
// console.log(xy)

//2 задание
// const num = Number(prompt('Введите число'))
// if (num % 2 === 0) {
//     alert("Число " + num + " четное")
// } else {
//     alert("Число " + num + " не четное")
// }let num = +prompt("Введите число");


//3 задание
//       нужно ли знак - или + считать за символ ???????
// const num = prompt('Введите целое  число');
// let sign = Math.sign(+num);
// let singMinusOrPlus;
// let numLength = num.length;
//
// if (sign === -1 || sign === -0) {
//     singMinusOrPlus = "Отрицательное";
// } else if
// (sign === 1 || sign === 0) {
//     singMinusOrPlus = "Положительное";
// } else {
//     singMinusOrPlus = "Число введено не правильно или вы ввели не число";
// }
// switch (numLength) {
//     case 1:
//         alert('число (' + num + ') однозначное ,' + singMinusOrPlus)
//         break;
//     case 2:
//         alert('число (' + num + ') двузначное ,' + singMinusOrPlus)
//         break;
//     case 3:
//         alert('число (' + num + ') трехзначное ,' + singMinusOrPlus)
//         break;
//     case 4:
//         alert('число (' + num + ') четырёхзначное ,' + singMinusOrPlus)
//         break;
//     case 5:
//         alert('число (' + num + ') пятизначное ,' + singMinusOrPlus)
//         break;
//     default:
//         alert('число (' + num + ') многозначное ,' + singMinusOrPlus + ' длиной в ' + numLength + ' символов')
//         break;
// }
// console.log(num, numLength, singMinusOrPlus);

//4 задание
// const a = Number(prompt('Ведите первое число для сравнения'));
// const b = Number(prompt('Ведите второе число для сравнения'));
// const c = Number(prompt('Ведите третье число для сравнения'));
// let result = null
// if (a > b && a > c) {
//     result = 'число ' + a + 'самое большое';
// } else if (b > a && b > c) {
//     result = 'число ' + b + 'самое большое';
// } else if (c > a && c > b) {
//     result = 'число ' + c + 'самое большое';
// } else {
//     result = 'что-то пошло не по плану '
// }
// console.log(a,b,c,result)
//5 задание
// const a = Number(prompt('Ведите первое число для создания треугольника'));
// const b = Number(prompt('Ведите второе число для создания треугольника'));
// const c = Number(prompt('Ведите третье число для создания треугольника'));
// if (a + b > c) {
//     alert(' будет сушествовать ');
// } else if (a + b <= c) {
//     alert('треугольник не будет сушествовать');
// }else {
//     alert('что-то пошло не по плану');
// }
//
// console.log(a,b,c);

