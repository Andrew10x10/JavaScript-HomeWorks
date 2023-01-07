'use strict';
const arr = [1, 2, 3, -1, -2, -3];

function getNewArr(array) {

    const exampleArr = [];
    if (array.length === 0) {
        alert('Error,  your array is empty')
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= 0) {
                exampleArr.push(array[i]);
            }
        }
    }
    return exampleArr.length !== 0 ? exampleArr : null;
}

console.log(getNewArr(arr));









// const arr = [5,7,8,9];
// console.log(arr)
// console.log(arr.push(10, 20));
// console.log(arr.length)