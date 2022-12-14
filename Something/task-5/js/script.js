'use strict';
const age = Number(prompt('tell me your age'));
const currentYear = new Date().getFullYear();

if (!Number.isNaN(age) && age > 21 && confirm('согласны?')){
    console.log(currentYear - age);
}
////===========================//===========================//===========================
let userName = prompt('Назови свой логин');

if (userName === 'админ') {

    let yourPass = prompt('Назови свой пароль');

    if (yourPass === 'пас') {
        alert('Привет ' + userName + " все верно.Можешь пользоваться сервером");
    } else if (yourPass === '' || null) {
        alert('Ты что не знаешь пароль');
    } else {
        alert('Не угадал');
    }
} else if (userName === '' || userName === null) {
    alert("Ты нечего не вел");
} else {
    alert("Свободен " + userName);
}
// //===========================//===========================//===========================
// let userName = prompt("Кто там?", '');
//
// if (userName === 'Админ') {
//
//     let pass = prompt('Пароль?', '');
//
//     if (pass === 'Я главный') {
//         alert('Здравствуйте!');
//     } else if (pass === '' || pass === null) {
//         alert('Отменено');
//     } else {
//         alert('Неверный пароль');
//     }
//
// } else if (userName === '' || userName === null) {
//     alert('Отменено');
// } else {
//     alert("Я вас не знаю");
// }

// console.log(userName);


// let x = prompt('your number');
// (x > 2) && alert( 'Greater than zero!' );
//
// let x = prompt('your number');
// if(x > 2){
//     alert( 'Greater than zero!' );
// }

// alert( alert(1) && alert(2) );
// alert( null || 2 || undefined );
// alert( alert(1) || 2 || alert(3) );
// alert( null || 2 && 3 || 4 );

// let age = prompt('введи возраст') ;
// if (age >= 14 && age <= 90) {
//     alert('hello');
// }

// let age = prompt('введи возраст') ;
// if (!(age >= 14 && age <= 90)){
//     alert('foot');
// }
// if (age <= 14 || age >= 90){
//     alert('foot');
// }
// console.log(age);

// let hour = 12;
// let minute = 30;
//
// if (hour == 12 && minute == 30) {
//     alert( 'The time is 12:30' );
// }
