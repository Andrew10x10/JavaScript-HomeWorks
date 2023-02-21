'use strict';
(function () {



    const getFactorial = (num) => {
        if (num <= 1) {
            return 1
        } else {
            return num * getFactorial(num - 1)
        }
    }
    console.log(getFactorial(3));

    const pow = (num, degree) => degree === 0 ? 1 : num * pow(num, degree - 1);
    console.log(pow(3, 5))

    const funcAdd = (a, b) => a === 0 ? b : funcAdd(a - 1, b + 1)
    console.log(funcAdd(3, 2))



})();
