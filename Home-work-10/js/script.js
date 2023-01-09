'use strict';
let numOrStr = prompt('input number or string');
console.log(numOrStr)

numOrStr = numOrStr != null ? numOrStr.trim() : numOrStr;
numOrStr = isNaN(numOrStr) ? 'Not a number' : numOrStr;

console.log(numOrStr)

switch (numOrStr) {
    case null :
        console.log('вы отменили');
        break;
    case 'Not a number':
        console.log('number is Ba_NaN')
        break;
    case  '':
        console.log('Empty String')
        break;
    default :
        console.log('ok')
        break;
}



