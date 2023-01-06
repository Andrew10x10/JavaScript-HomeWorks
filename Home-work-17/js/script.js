'use strict';
const userNumber = prompt('Введите своё число');
let userDegree;

function a(number, degree = 1) {
    return console.log(Math.pow(number, degree))
}

let error = 'some error';
if (!(isNaN(+userNumber) || userNumber === '' || userNumber === null)) {
    userDegree = +prompt('Введите степерь в которую хотите возвести число ' + userNumber);
    a(userNumber, userDegree)
} else {
    alert(error)
}