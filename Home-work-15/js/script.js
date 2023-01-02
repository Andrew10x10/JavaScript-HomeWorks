'use strict';

let userNumber = Number(prompt("Please enter your number"));
let primeNumber = true;

if (userNumber !== Number(userNumber)) {
    alert('please input valid number')
} else if (userNumber === 0 || userNumber === 1) {
    primeNumber = false
} else if (userNumber > 1) {
    for (let i = 2; i < userNumber; i++) {
        if (userNumber % i === 0) {
            primeNumber = false
            console.log(i)
        }
    }
}

console.log(userNumber,primeNumber)




// let number = Number(prompt('Enter prime number here'));
// let result ;
// if (number < 1) {
//     result = false;
// }
// for (let i = 2;; i++) {
//     if (number % 1 === 0 && number % number === 0) {
//         console.log(true)
//         result = true
        // break;
    // } else if (number % 2 === 0){
    //     console.log(false)
        // result = false;
//     }
// for (let i = 0;i < number ;i++){
//     if (number % 1 === 0 && number % 2 !== 0){
//         result = true
//         break;
//     } else {
//         result = false
//     }
// }
// console.log(number, result)
// Prime:
//     for (let i = 2; i <= number; i++) {
//         for (let a = 2; a < i; a++) {
//             if (i % a === 0) continue Prime;
//         }
//         // if (i === true) {
//         //     console.log('true')
//         // } else {
//         //     console.log('false')
//         // }
//         alert(true);
//         console.log(i);
//         // if (number % i === 0) {
//         //     console.log('true')
//         // } else {
//         //     console.log('false')
//         // }
//     }