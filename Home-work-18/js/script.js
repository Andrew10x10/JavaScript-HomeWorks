'use strict';
// const fullNumber = '2034399002125581';
// const last4Digits = fullNumber.slice(4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
//
// console.log(maskedNumber); // expected output: "************5581"
//
// function leftFillNum(num, targetLength) {
//     return num.toString().padStart(targetLength, '*');
// }

// const string = 'hello';
// console.log(leftFillNum(string, 5)); // "00123"


let error = 'some error';

function padString(string, numberOfLength, symbolAdd, boolean = true) {

    if (typeof string !== "string") return error + ' (' + string + ') it is not a string';
    if (typeof symbolAdd !== "string") return error + ' (' + symbolAdd + ') it is not a data type string'
    if (symbolAdd.trim().length > 1) return
    if (typeof numberOfLength !== "number") return error + ' (' + numberOfLength + ') it is not a number';
    if (typeof boolean !== "boolean") return;
    if (numberOfLength < string.length) return string.substring(0, numberOfLength);
    if (boolean) return string.padEnd(numberOfLength, symbolAdd);
    return string.padStart(numberOfLength, symbolAdd)
}

console.log(padString('Andrey', 8, '*', false));
