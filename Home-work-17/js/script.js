'use strict';
const userNumber = prompt('Введите своё число');
let userDegree;
const error = 'some error';

function a(number, degree = 1) {
    return alert(Math.pow(number, degree));
}


if (!(isNaN(+userNumber) || userNumber === '' || userNumber === null)) {
    userDegree = +prompt('Введите степерь в которую хотите возвести число ' + userNumber);

    if (!(Number(userDegree)) || userDegree === '' || userDegree === null) {
        a(userNumber)
    } else {
        a(userNumber,userDegree);
    }

} else {
    alert(error)
}





// const num = prompt('enter the number pls');
// const deg = prompt('enter the degree pls');
//
// function getDegree (number, degree = 1)  {
//     if (!(Number(number)) || number === '' || number === null){
//         alert('some error')
//     }
//     return alert(Math.pow(number, degree));
// }
//
// if (isNaN(+deg) || deg === '' || deg === null){
//     getDegree(num)
// } else {
//     getDegree(num, deg)
// }