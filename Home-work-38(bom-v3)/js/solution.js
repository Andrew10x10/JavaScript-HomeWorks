'use strict';
(function() {
    const array = [1, 2, 3];
    const arrayArrays1 = [1,2,[1.1, 1.2, 1.3],3]
    const arrayArrays2 = [1, 2, [1.1,1, 2, [1.1, 1.2, 1.3], 31.2, 1.3], 31, 2, [1.1, 1.2, 1.3], 3];

    // Создаем два контейнера div
    const createElementDiv = document.createElement('div');
    createElementDiv.className = 'list-container';
    const createElementDiv2 = document.createElement('div');
    createElementDiv2.className = 'container';

    // Добавляем контейнеры в body
    document.body.appendChild(createElementDiv);
    document.body.appendChild(createElementDiv2);

    // Добавляем текст во второй контейнер
    createElementDiv2.appendChild(document.createTextNode('Это div под списком'));

    // Функция генерации списка
    const generateList = (item) => {
        const error = 'Это не массив';
        // Создаем элемент ul
        const ulTag = document.createElement('ul');
        createElementDiv.appendChild(ulTag);

        // Если item не является массивом, выводим сообщение об ошибке
        if (!Array.isArray(item)) {
            ulTag.innerText = error;
            return;
        }

        // Иначе добавляем текст в элемент ul
        ulTag.appendChild(document.createTextNode('Это элемент списка'));

        // Перебираем элементы массива
        for (let i = 0; i < item.length; i++) {
            // Создаем элемент li
            const li = document.createElement('li');
            // Если текущий элемент является массивом, вызываем функцию generateList рекурсивно
            if (Array.isArray(item[i])) {
                li.appendChild(generateList(item[i]));
            } else {
                // Иначе добавляем текст в элемент li
                li.appendChild(document.createTextNode(item[i]));
            }
            // Добавляем элемент li в элемент ul
            ulTag.appendChild(li);
        }
        // Возвращаем элемент ul для вложенных списков
        return ulTag;
    };

    // Вызываем функцию generateList с массивом arrayArrays
    generateList(array);
    // generateList(arrayArrays1);
    // generateList(arrayArrays2);
})();
