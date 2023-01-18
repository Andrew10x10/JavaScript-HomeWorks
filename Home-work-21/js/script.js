'use strict'

const problem = 'something is wrong, try entering the number again'

function mainFunction(callback) {
    const value1 = prompt('Please enter number');
    if (isNaN(+value1) || value1 === null || !value1.trim().length) return alert(problem)

    const value2 = prompt(`What power do you want to raise ${value1}  to?`);
    if (isNaN(+value2) || value2 === null || !value2.trim().length) return alert(problem)

    console.log(value1.length + ' - symbol length', typeof value1 + ';', value2.length + ' - symbol length', typeof value2)

    callback(value1, value2)
}

function exponentiation(value1, value2) {
    alert(Math.pow(value1, value2));
}

function multiplication(value1, value2) {
    alert(value1 * value2)
}

function division(value1, value2) {
    alert(value1 / value2)

}

function modulo(value1, value2) {
    alert(value1 % value2)
}


mainFunction(exponentiation);
// mainFunction(multiplication);
// mainFunction(division);
// mainFunction(modulo);

