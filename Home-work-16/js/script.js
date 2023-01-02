'use strict';

let userNumber = prompt('Введите своё число')
let result = null;

if (userNumber <= 2) {
    result = 'error';
}
if (userNumber !== null && !isNaN(+userNumber)) {
    for (let i = 2; i < userNumber; i++) {
        if (userNumber % i === 0) {
            result = `${i} явлеется найменшим делителем ${userNumber}`
            break;
        } else {
            result = `${userNumber} Это простое число`;
        }
        console.log(i);
    }
} else {
    result = 'Что-то пошло не по плану , попробуй снова';
}
console.log(result,userNumber);
alert(result);