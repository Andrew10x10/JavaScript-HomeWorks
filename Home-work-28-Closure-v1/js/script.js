'use strict';
(function (){
    function  createCalc(n){
        let num = n;
        return function (sum){
            num+=sum
            return `result:${num}`
        }
    }
    const create = createCalc(0)
    console.log(create(2))
    console.log(create(10))
    console.log(create(20))
})();


