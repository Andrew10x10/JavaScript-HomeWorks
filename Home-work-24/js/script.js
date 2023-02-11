'use strict';
// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.
const first = () => {
    let arr = ['a', 'b', 'c', 'd'];
    return arr.splice(0, 2).join('+') + ',' + arr.join('+')
}
console.log(first())

// // 2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной
const second = () => {
    let arr2 = [2, 5, 3, 9]
    let firstPartArr = arr2.slice(0, 2);
    firstPartArr = firstPartArr[0] * firstPartArr[1];
    arr2 = arr2[2] * arr2[3];
    return firstPartArr + arr2
}
console.log(second())

// 3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
const third = () => {
    let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let arrSplice = arr.splice(1, 1)
    return arrSplice.shift().shift()
}
console.log(third())

// 4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.
const forth = () => {
    let object = {
        js: ['jQuery', 'Angular'],
        php: 'hello',
        css: 'world'
    }
    return object.js.shift()
}
console.log(forth())

// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.
const fifth = (str = 'x', length = 5) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(str)
        str = str + 'x'
    }
    return arr
}
console.log(fifth('x',5))

// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.

const sixth = (length = 7) => {
    const arr = [];
    for (let i = 1; i <= length; i++) {
        let str = '';
        for (let o = 0; o < i; o++) {
            str += i
        }
        arr.push(str)
    }
    return arr
}
console.log(sixth())

// 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями.
// Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.
// Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].
const arrayFill = (value = 'x', length = 5) => {
    let arr7 = []
    for (let i = 0; i < length; i++) {
        arr7.push(value)
    }
    return arr7
}
console.log(arrayFill())

// 8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
const eighth = (arr = []) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] + sum
        console.log(arr[i])

        if (sum >= 10) return i + 1
    }
}
console.log(eighth([2,5,2,3,2,6,7]))

// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
const ninth = (arr) => {
    let a = ['d',];
    for (let i = 0; i < arr.length; i++) {
        a[i] = arr[(arr.length - 1) - i];
    }
    return a
}
console.log(ninth(['aa','b','c','d']))

// 10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива.
// Массив, конечно же, может быть произвольным.
const tenth = () => {
    let arr = [[1, 2, 3], [4, 5], [6]];
    let newArr = arr.flat(1);
    const initialValue = 0;
    return newArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue
        , initialValue
    );
}
console.log(tenth())
// 11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
const eleventh = () => {
    let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    let newArr = arr.flat(Infinity);
    const initialValue = 0;
    return newArr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
}
console.log(eleventh())
