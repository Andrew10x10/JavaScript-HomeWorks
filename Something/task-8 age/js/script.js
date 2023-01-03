'use strict';
const error = 'ошибка ввода данных';

function getAge(number) {
    if (isNaN(number) || number === '' || number === null) {
        return error;
    } else {
        if (number === 0)
            return 'лет'
        if (number >= 5 && number <= 13)
            return 'лет'
        number %= 10;
        if (number === 1 )
            return "год"
        if (number >= 2 && number <= 4)
            return "года"

        return 'лет'
    }
}

let yearOfBorn = +prompt('Введите ваш возраст');
const moment = 'На данный момент вам ' + yearOfBorn + ' ' + getAge(yearOfBorn)
if (getAge(yearOfBorn) === error) {
    alert(error)
} else {
    alert(moment)
}