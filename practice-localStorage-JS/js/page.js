'use strict';
(function () {
    const ol = document.createElement('ol');
    ol.setAttribute('data-ol','ololo')
    const div = document.querySelector('.content')
    div.prepend(ol)

    const list = document.querySelector('ol');

    const data = JSON.parse(localStorage.getItem(DATA_KEY));


    if(!data){
        const li = document.createElement('li');
        li.textContent = 'error no info';
        list.appendChild(li);
        return
    }

    Object.entries(data).forEach(([name, value]) => {
        const li = document.createElement('li');
        li.textContent = `${name}: ${value}`;
        list.appendChild(li);
    });






})()