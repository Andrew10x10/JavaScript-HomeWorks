'use strict'

//task #1

const user = {
    name: 'John',
    surname: 'Smith',
};
user.name = 'Pete';
delete user.name;
console.log(user);

//task #2
// Можно ли изменить объект, объявленный с помощью const?
// da
 user.name = 'Task_2';
console.log(user);


//task #3

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
const sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(salaries.John + ' + ' + salaries.Ann + ' + ' +salaries.Pete + ' = ' + sum);