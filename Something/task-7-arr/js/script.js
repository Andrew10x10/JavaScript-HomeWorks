'use strict';
const user = [
    {
        name: "Alex",
        age: 12,
    },
    {
        name: "Andrew",
        age: 24,
    },
    {
        name: "Anna",
        age: 35,
    },
    {
        name: "Alisa",
        age: 42,
    },
    {
        name: "Alina",
        age: 51,
    }
];
let sum = null;
user.forEach(item => sum += item.age);
console.log(sum);

console.log(Math.ceil(sum / user.length));

// let foo = '130';
// let sum = foo[0] + foo[1] + foo[2];
// // console.log(foo[2]+foo[0]+ foo[2]+foo[1]+sum);
// foo = foo.replace('0', '.5678');
// console.log(sum, typeof Number(sum));
// console.log(foo)
