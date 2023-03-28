'use strict';
(function () {
    const form = document.querySelector('#form');

    form.addEventListener('submit', event => {
        event.preventDefault()
        const {target} = event
        // console.log(target)
        const inputs = target.querySelectorAll('input,select,textarea');
        // console.log(inputs)
        const data = Array.from(inputs).reduce((acc, {name, value}) => {
            acc[name] = value;
            return acc
        }, {})
        // console.log(data)
        localStorage.setItem(DATA_KEY, JSON.stringify(data))

        let history = localStorage.getItem(HISTORY_KEY);
        // creat new history data
        if (!history) {
            localStorage.setItem(HISTORY_KEY, JSON.stringify([data]))
            return
        }
        // update history data
        history = JSON.parse(history)
        history.push(data);
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
    })
    document.addEventListener("DOMContentLoaded", () => {
        let data = localStorage.getItem(DATA_KEY);
        if (!data) return;
        data = JSON.parse(data);
        const inputs = form.querySelectorAll('input,select,textarea');

        inputs.forEach(item => {
            item.value = data[item.name]
        })
        // console.log(inputs);
    })
})()


// Стандартный размер локального хранилища в современных браузерах
// составляет 5-10 МБ на домен. Однако, это значение может отличаться
// в зависимости от браузера, операционной системы и настроек пользователя.

// localStorage.remainingSpace()


// (function () {
//
//     const clear = (id) => {
//         const elementOl = document.getElementById(id);
//         const li = elementOl.querySelectorAll('li');
//
//         for (let i = 0; i < 4; i++) {
//             li[i].innerHTML = '';
//             if (li[i].innerHTML === '') {
//                 li[i].remove();
//             }
//         }
//     }
//     clear('elem'); // очищает список
//
//     // const creatLi = () => {
//     //     const list = document.createElement('ul');
//     //
//     //     while (true) {
//     //         const item = prompt('Введите текст для элемента списка');
//     //         if (item === null || item.trim() === '') {
//     //             break;
//     //         }
//     //         const li = document.createElement('li');
//     //         li.textContent = item;
//     //         list.appendChild(li);
//     //     }
//     //
//     //     document.body.appendChild(list);
//     // }
//     // creatLi(); // создает список
//     //
//     // // Получаем кнопки и элемент часов
//     // const startBtn = document.getElementById('start-btn');
//     // const stopBtn = document.getElementById('stop-btn');
//     // const clock = document.getElementById('clock');
//     //
//     // let timerId;
//
// // // Получаем ссылки на элементы на странице
// //     const startBtn = document.getElementById('start-btn');
// //     const stopBtn = document.getElementById('stop-btn');
// //     const clock = document.getElementById('clock');
// //
// // // Объявляем переменную для хранения идентификатора таймера
// //     let timerId;
// //
// // // Функция, которая обновляет содержимое элемента с часами
// //     function updateClock() {
// //         const now = new Date();
// //         const hours = now.getHours().toString().padStart(2, '0');
// //         const minutes = now.getMinutes().toString().padStart(2, '0');
// //         const seconds = now.getSeconds().toString().padStart(2, '0');
// //         clock.innerHTML = `${hours}:${minutes}:${seconds}`;
// //     }
// //
// // // Обработчик нажатия на кнопку "старт"
// //     startBtn.addEventListener('click', () => {
// //         // Запускаем функцию обновления времени каждую секунду и сохраняем идентификатор таймера
// //         timerId = setInterval(updateClock, 500);
// //     });
// //
// // // Обработчик нажатия на кнопку "стоп"
// //     stopBtn.addEventListener('click', () => {
// //         // Останавливаем обновление времени
// //         clearInterval(timerId);
// //     });
//
//
//     let one = document.getElementById('one')
//     one.insertAdjacentHTML('afterend', '' +
//         '<li id="two">2</li>' +
//         '<li id="three">3</li>');
//
//
// })()