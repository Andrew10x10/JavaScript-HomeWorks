'use strict'
// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
console.log('задание номер 1');
let arr1 = [1, 2, 3];
let updatedArr = arr1.concat([4, 5, 6]);
console.log(updatedArr);

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
console.log('задание номер 2');
let arr2 = [1, 2, 3];
arr2.reverse();
console.log(arr2);

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
console.log('задание номер 3');
let arr3 = [1, 2, 3];
arr3.push(4, 5, 6);
console.log(arr3);

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
let arr4 = [1, 2, 3];
arr4.unshift(4, 5, 6);
console.log('задание номер 4');
console.log(arr4);

// 5. Дан массив [‘js’, ‘css’, ‘jq’]. Выведите на экран первый элемент.
let arr5 = ['js', 'css', 'jq'];
let firstArrEl = arr5.shift();
console.log('задание номер 5');
console.log(firstArrEl);

// 6. Дан массив [‘js’, ‘css’, ‘jq’]. Выведите на экран последний элемент.
let arr6 = ['js', 'css', 'jq'];
let arrLastEl = arr6.pop();
console.log('задание номер 6')
console.log(arrLastEl)

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].
let arr7 = [1, 2, 3, 4, 5];
let arrNew7 = arr7.splice(0, 3);
console.log('задание номер 7')
console.log(arrNew7);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].
let arr8 = [1, 2, 3, 4, 5];
let arrNew8 = arr8.splice(3, 2);
console.log('задание номер 8')
console.log(arrNew8);

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].
let arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 2)
console.log('задание номер 9')
console.log(arr9)

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].
let arr10 = [1, 2, 3, 4, 5];
console.log('задание номер 10')
let arrNew10 = arr10.slice(1, 4);
console.log(arrNew10)

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, ‘a’, ‘b’, ‘c’, 4, 5].
let arr11 = [1, 2, 3, 4, 5];
console.log('задание номер 11')
arr11.splice(3, 0, 'a', 'b', 'c')
console.log(arr11)

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, ‘a’, ‘b’, 2, 3, 4, ‘c’, 5, ‘e’].
console.log('задание номер 12')
let arr12 = [1, 2, 3, 4, 5];
arr12.splice(1, 0, 'a', 'b');
arr12.splice(6, 0, 'c');
arr12.splice(8, 0, 'e')
console.log(arr12)

// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
console.log('задание номер 13')
let arr13 = [3, 4, 1, 2, 7];
arr13.sort()
console.log(arr13)

// 14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.
console.log('задание номер 14');
let arr14 = [5, 6, 7, 8, 9];
const sumArr14 = arr14.reduce((acc, item) => acc + item, 0)
console.log(sumArr14)

// 15. Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.
console.log('задание номер 15');
let arr15 = [5, 6, 7, 8, 9];
const newArr15 = arr15.map((item) => Math.pow(item, 2));
console.log(newArr15)

// 16. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.
console.log('задание номер 16');
let arr16 = [1, -3, 5, 6, -7, 8, 9, -11];
let arrNew16 = arr16.filter(item => item < 0);
console.log(arrNew16)

// 17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.
console.log('задание номер 17');
let arr17 = [1, -3, 5, 6, -7, 8, 9, -11];
const newArr17 = arr17.filter((item) => item % 2 === 0);
console.log(newArr17)

// 18. Дан массив со строками [‘aaa’, ‘aaaqqq’, ‘zzzqq’, ‘zz’, ‘qsaa’, ‘q’, ‘az’]. Оставьте в нем только те строки, длина которых больше 5-ти символов.
console.log('задание номер 18');
let arr18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
let arrNew18 = arr18.filter(item => item.length >= 5)
console.log(arrNew18)

// 19. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
console.log('задание номер 19');
let arr19 = [1, 2, [3, 4], 5, [6, 7]];
let newArr19 = arr19.filter(item=> Array.isArray(item))
console.log(newArr19)

// 20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.
console.log('задание номер 20');
let arr20 = [5, -3, 6, -5, 0, -7, 8, 9];
let arrNew20 = arr20.filter(item => item < 0);
console.log(arrNew20.length);