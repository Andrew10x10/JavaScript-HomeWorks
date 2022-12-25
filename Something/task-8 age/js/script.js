'use strict';

function getAge(number) {
    if (number == 0)
        return 'лет'
    if (number >= 5 && number <= 10 )
        return 'лет'
    number %= 10

    if (number == 1)
        return "год"
    if (number >= 2 && number <= 4)
        return "года"
    return 'лет'
}


let num = +prompt('here number');
alert("вам " + num + ' ' + getAge(num));

