'use strict';

// // Fn = Fn-1 + Fn-2.

function fib(n = 1) {
    if (n <= 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

console.log(fib(1))


