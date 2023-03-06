'use strict';
(function () {

    Function.prototype.myBind = function (context, ...args) {
        const linkThis = this;
        if (typeof linkThis !== "function") {
            throw new TypeError("Expected a function");
        }
        return function(...newArgs) {
            return linkThis.apply(context, args.concat(newArgs));
        };
    };

    const user = {
        name: 'Andrew',
        age: 24,
        job: 'nothing doing',
    }
    const user2= {
        name: 'cat',
        age: 9,
        job: 'nothing doing',
    }
    const user3 = {
        name: 'dog',
        age: 2,
        job: 'nothing doing',
    }

    const UserInfo = function (something) {
        console.log(`User name: ${this.name}, his age: ${this.age} something about him: ${something}`);
    };

    const aboutUser1 = UserInfo.myBind(user,'beautiful');
    const aboutUser2 = UserInfo.myBind(user2,'lazy ass');
    const aboutUser3 = UserInfo.myBind(user3,'like eat shit');

    aboutUser1();
    aboutUser2();
    aboutUser3();

})();
