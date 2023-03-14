let listItem = document.querySelectorAll("#ulId > li");
console.log(listItem)

let texts = []
for(let item of listItem) {
    texts.push(item.textContent)

}
console.log(texts)
console.log(`общее кол-во элементов: ${listItem.length}`);

