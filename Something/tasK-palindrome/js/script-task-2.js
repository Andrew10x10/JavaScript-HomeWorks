'use strict';
(function () {


    let str = (someString) => {
        someString = someString.toUpperCase()
        if (someString === someString.split('').reverse().join('')) {
            return someString.toLowerCase() + " this is a palindrome"
        } else {
            return someString.toLowerCase + " this isn't a palindrome"
        }
    }
    console.log(str('someemos'))

    let str1 = (someString) => {
        const length = Math.floor(someString.length / 2);
        for (let i = 0; i < length; i++) {
            if (someString[i] !== someString[someString.length - i - 1]) {
                return false
            }
        }
        return true
    }
    console.log(str1('fsaafs'))
})()