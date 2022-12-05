'use strict';

//1. Найти процент от числа

// const uah = 'грн';
// const money = prompt('Ведите количество гривен, от которых хотим высчитать процент');
// const present = prompt('Ведите процент,которые нужно узнать от ' + money + uah);
//
// const result = money * present / 100 ;
//
// alert('от ' + money + ' ' + uah + ' ' + present + ' % = ' + result + ' ' + uah);



//2. Находим процент от чисел

const usd = 'usd';
const present = '%';
const b = prompt('Введите первое количество ' + usd + '($)' + ' , из которого будем высчитывать ' + present +'.');

const a = prompt('Введите второе количество ' + usd + '($)' + ' , которое будет приведено к процентному соотношению от первого числа.');

const result = (a / b) * 100 + present;

alert('от ' + b + ' ' + usd + ' - ' + a + ' ' + usd + ' = ' + result);
