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
//
// const string = 'hello';
// console.log(leftFillNum(string, 5)); // "00123"

// // let error = 'some error';
// let a=prompt('Andrey','Andrey');
// let s=prompt('10','10');
// let d=prompt('&','&');
// let f=prompt('true or false','true');

function padString(string, length, symbolAdd, boolean) {
    if (string !== null && isNaN(+string) && string.trim().length) {
        if (length !== null && !isNaN(+length)) {
            if (symbolAdd !== null && isNaN(+symbolAdd) && symbolAdd.trim().length) {
                switch (boolean) {
                    case true:
                        return string.toString().padStart(length, symbolAdd);
                    case false:
                        return string.toString().padEnd(length, symbolAdd);
                    default:
                        return string.toString().substring(0, length);


                }
            } else {
                throw new Error('it is not a symbol');
            }
        } else {
            throw new Error('it is not a number');
        }
    } else {
        throw new Error('it is not a string');
    }

}

// console.log(padString(a,s,d,f));
console.log(padString('Andrey', 10, '*', false));
console.log(padString('Andrey', 21, '*', true));
console.log(padString('Andrey', 2, '*'));




