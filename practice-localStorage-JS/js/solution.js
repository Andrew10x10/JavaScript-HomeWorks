'use strict';
(function () {
    const form = document.querySelector('#form');
    form.addEventListener('submit', event => {
        event.preventDefault();

        const inputs = form.querySelectorAll('input, select, textarea');
        const data = Array.from(inputs).reduce((acc, { name, value }) => {
            acc[name] = value;
            return acc;
        }, {});

        localStorage.setItem(DATA_KEY, JSON.stringify(data));
    });




})()
