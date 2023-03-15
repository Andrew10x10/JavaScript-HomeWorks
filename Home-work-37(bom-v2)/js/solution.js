const ulElement = document.querySelector('ul');
const arrAttributeValue = [];
const arrAttributeName = []
console.log(ulElement);


for(const attribute of ulElement.attributes){
    arrAttributeValue.push(attribute.value)
    arrAttributeName.push(attribute.name)
}
console.log(`Name: ${arrAttributeName}\nValue: ${arrAttributeValue}`);

const lastChild = ulElement.querySelector('li:last-child');
const sayHello = lastChild.innerHTML= 'Hello my name big sugar daddy';
console.log(sayHello);

const firstChild = ulElement.querySelector('li:first-child');
firstChild.setAttribute('data-my-name', 'Andrew')

ulElement.removeAttribute('data-dog-tail');