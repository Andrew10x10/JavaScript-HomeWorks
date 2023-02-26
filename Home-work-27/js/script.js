'use strict';
(function () {
    let steps = 0
    const some = (number) => {
        steps++;
        const primeNum = String(number);
        const arrPrimeNum = Array.from(primeNum);
        let primeNum2 = arrPrimeNum.reverse().join('');
        let result = +primeNum + +primeNum2;
        let strResult = String(result)
        if (strResult !== strResult.split('').reverse().join('')) {
            some(strResult)
        } else {
            return console.log('result: ' + strResult + ' steps: ' + steps)
        }
    };
    some(96)
})();

// ----------------------------------------------------------------------------------------------------
//
// let str = (someString) => {
//     someString = someString.toUpperCase()
//     if (someString === someString.split('').reverse().join('')) {
//         return someString.toLowerCase() + " this is a palindrome"
//     } else {
//         return someString.toLowerCase + " this isn't a palindrome"
//     }
// }