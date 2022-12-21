'use strict';
let yearOfBorn = Number(prompt('Введите ваш год рождения'));
let city = prompt("В каком городе вы живете?");
let sport = prompt("Какой ваш любимый вид спорта?");


let today = new Date();
let currentYear = today.getFullYear();

yearOfBorn = yearOfBorn === 0 || isNaN(yearOfBorn) ? ("Жаль, что Вы не захотели ввести свой возраст:(") : (`Ваш возраст ${currentYear - yearOfBorn}`)

switch (city) {
    case null:
        city = ('Жаль, что Вы не захотели ввести свой город');
        break;
    case '':
        city = ('Так, ты не ввел в каком городе живешь');
        break;
    case 'Киев':
        city = ('Ты живешь в Киеве  это столица Украины');
        break;
    case 'москва':
        city = ('Ты живешь в москве это столица БОЛОТА');
        break;
    case 'Варшава':
        city = ('Ты живешь в Варшаве столице Польши');
        break;
    default:
        city = ('ты живешь в городе ' + city);
}
if (city !== null || isNaN(city) || '') {
    switch (sport) {
        case  'баскет':
            sport = ('Круто! Хочешь стать Michael Jordan')
            break;
        case  'Баскеттбол':
            sport = ('Круто! Хочешь стать Michael Jordan')
            break;
        case  'Футбол':
            sport = ('Круто! Хочешь стать Месси')
            break;
        case null:
            sport = ('Жаль, что Вы не захотели ввести свой любимый вид спорта');
            break;
        case '':
            sport = ('Так, ты не ввел свой любимый спорт');
            break;
        default:
            sport = ('твой любимый спорт это ' + sport)
    }
}


let userInfo = `${yearOfBorn} \n${city} \n${sport}`;
alert(userInfo)

//================ ЭТО БЫЛИ ПОПЫТКИ МОЖНО НЕ СМОТРЕТЬ=============
// string ? 'Ви не ввели год" + yearOfBorn + " не являеться годом"'

// if (yearOfBorn === 0) {
//     alert("Жаль, что Вы не захотели ввести свой возраст :( ");
//     if (yearOfBorn === isNaN(yearOfBorn)) {
//        alert("Ви не ввели год" + yearOfBorn + " не являеться годом");
//        }
//     else {
//         alert('Ваш возраст' + currentYear - yearOfBorn);
//     }

// alert(yearOfBorn = yearOfBorn === 0||isNaN ? ("Жаль, что Вы не захотели ввести свой возраст :( ") : (`ваш возраст ${currentYear - yearOfBorn}`));
//     alert(yearOfBorn = yearOfBorn === isNaN(yearOfBorn) ? ("Ви не ввели год" + yearOfBorn + " не являеться годом") : `ваш возраст ${currentYear - yearOfBorn}`);
//     alert(yearOfBorn = yearOfBorn === isNaN(yearOfBorn) ? ("Ви не ввели год" + yearOfBorn + " не являеться годом") : `ваш возраст ${currentYear - yearOfBorn}`);

// yearOfBorn = yearOfBorn === 0 || isNaN(yearOfBorn) ? ("Жаль, что Вы не захотели ввести свой возраст:(") : (`Ваш возраст ${currentYear - yearOfBorn} ${years}`);

// let year_of_Born = Number(prompt('Введите свой год рождения'));
// let user_city = prompt("В каком городе вы живете?");
// let user_sport = prompt("Какой ваш любимый вид спорта?");

// console.log(year_of_Born)
// if (year_of_Born === null) {
//     alert('Жаль, что Вы не захотели ввести свой год рождения ')
// }
// else if (year_of_Born === 0) {
//     alert('Вы не ввели год')
// }
// let sport = null;
// let age = new Date().getFullYear() - year;
//
// if (year === null) {
//     alert('Жаль, что Вы не захотели ввести свой год рождения ')
// }
// else if (year === '') {
//     alert('Вы не ввели год')
// }
// let city = prompt('В каком городе вы живете?');
// switch (city) {
//     case 'Киев':
//         alert('Ты живешь в Киеве  это столица Украины');
//         break;
//     case 'москва':
//         alert('Ты живешь в москве это столица БОЛОТА');
//         break;
//     case 'Варшава':
//         alert('Ты живешь в Варшаве столице Польши');
//         break;
//     case null:
//         alert('Жаль, что Вы не захотели ввести свой город');
//         break;
//     case '':
//         alert('Так, ты нечего не вел');
//         break;
//     default:
//         alert('ты живешь в городе ' + city)
// }
//
// if (city !== null) {
//     let sport = prompt('спорт')
//     switch (sport) {
//         case  'баскет':
//             alert('Круто! Хочешь стать Michael Jordan')
//             break;
//         case  'Баскеттбол':
//             alert('Круто! Хочешь стать Michael Jordan')
//             break;
//         case  'Футбол':
//             alert('Круто! Хочешь стать Месси')
//             break;
//         case null:
//             alert('Жаль, что Вы не захотели ввести свой любимый вид спорта');
//             break;
//         case '':
//             alert('Так, ты нечего не вел');
//             break;
//         default:
//             alert('твой любимый спорт это ' + sport)
//     }
// }
// let result = alert('Ваш город рождения '+ year +' ваш возраст ' + age + 'вы живете в ' + city + 'ваш любимый спорт ' + sport)
// console.log(year, age, city)
// alert(result)
