'use strict';
let yearOfBorn = prompt('Введите ваш год рождения');
if (yearOfBorn !== null && !isNaN(+yearOfBorn)) {
    let city = prompt("В каком городе вы живете?");
    if (city !== null && city.trim().length && isNaN(+city)) {
        let sport = prompt("Какой ваш любимый вид спорта?")
        if (sport !== null && sport.trim().length && isNaN(+sport)) {
            switch (city) {
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
                    city = ('Ты живешь в городе ' + city);
            }
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
                default:
                    sport = ('Твой любимый спорт это ' + sport + 'ПОЗОР ')
            }
            alert(`Твой год рождения ${yearOfBorn} ,\n${city} ,\n${sport}`);

        } else {
            alert('Жаль, что Вы не захотели ввести свой любимый вид спорта');
        }
    } else {
        alert('Жаль, что Вы не захотели ввести свой город');
    }
} else {
    alert('Жаль, что Вы не захотели ввести свой возраст');
}