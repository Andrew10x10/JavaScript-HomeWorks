'use strict';
const people = [
    {name: 'Marta', age: 40, budget: 4000},
    {name: 'Alex', age: 20, budget: 4000},
    {name: 'Michael', age: 55, budget: 4000},
    {name: 'Andrey', age: 10, budget: 4000},
    {name: 'Alina', age: 15, budget: 4000},

]
// for ()
//------ №-1 ForEach


//------ №-1  Filter
// const adults = [];
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adults.push(people[i])
//     }
// }
// ------ №-2 Filter
// const adults = people.filter(person => {
//     if (person.age >= 18) {
//         return true
//     }
// })
// console.log(adults)
// ------ №-3 Filter
// const adults = people.filter(person => person.age >= 18);
// console.log(adults)

//------- №-1  Map
// const newPeople = people.map(person => {
//     return person
// })
// console.log(newPeople)

// function camelize(str) {
//     return str
//         .split('-')
//         .map(
//             (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join(' ');
//
// }
// console.log(camelize("-background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// function  filterRange(arr, a, b){
// }
//
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
//
// alert( filtered ); // 3,1 (совпадающие значения)
//
// alert( arr ); // 5,3,8,1 (без изменений)
// function filterRange(arr, a, b) {
//     // добавлены скобки вокруг выражения для улучшения читабельности
//     return arr.filter(item => (a <= item && item <= b));
// }

// let arr = [5,2, 3, 8, 1];
//
// let filtered = filterRange(arr, 1, 4);
//
// console.log( filtered ); // 3,1 (совпадающие значения)
//
// console.log( arr ); // 5,3,8,1 (без изменений)

//??????
// let array = [4, 12, 18, 14, 5, 17, 8, 130, 44];
// let NewArr = array.filter(element => element >= 4 && element <= 18)
//==
// .sort((a, b) => a - b)
//     .sort()
// console.log(NewArr)
