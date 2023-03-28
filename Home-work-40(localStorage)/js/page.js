'use strict';
(function () {
    document.addEventListener('DOMContentLoaded', () => {
        let data = localStorage.getItem(HISTORY_KEY);
        if(!data)return;

        data = JSON.parse(data);

        const result = data.reduce((acc,item)=>{
             const ulElement = document.createElement('ul')
            Object.keys(item).forEach(key =>{
                const li = document.createElement('li');
                li.innerHTML = `<b>${key}: </b> <u>${item[key]}</u>`
                ulElement.append(li)
            })
            acc.append(ulElement)
            acc.append(document.createElement("hr"))
            return acc
        },document.createElement('div'))

        // console.log(data)
        // console.log(Object.keys(data))

        // console.log(Object.values(data))
        // console.log(Object.entries(data))

        console.log(result)
        document.body.append(result)

    })
})()