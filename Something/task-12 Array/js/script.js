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