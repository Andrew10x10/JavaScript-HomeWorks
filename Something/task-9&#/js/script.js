'use strict';
let out = document.getElementById('out')
let tmp = '';
for (let i = 7000; i <= 10002; i = i + 1) {
    tmp = tmp + '&#' + i + '';
    // console.log('&#' + `${i}`)
}

out.innerHTML=tmp;