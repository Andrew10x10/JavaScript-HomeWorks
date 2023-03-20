'use strict';
(function (){
    function createTable(numRows, numCols) {
        const table = document.createElement("table");

        for (let i = 0; i < numRows; i++) {
            const row = table.insertRow();
            for (let j = 0; j < numCols; j++) {
                const cell = row.insertCell();
                cell.innerHTML = i * 10 + j + 1;
            }
        }
        document.body.appendChild(table);
    }

    createTable(10, 10);
})()


