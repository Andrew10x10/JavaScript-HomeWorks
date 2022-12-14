'use strict'
let today = new Date().getFullYear();
const firstName = prompt('Привет друг, назови себя.');
const yearsName = +prompt('Скажи мне сколько тебе лет и я скажу какого ты года.');
const resultBirthday = today - yearsName;

alert(firstName + ' ,ого да ты ' + resultBirthday + ' года.');
