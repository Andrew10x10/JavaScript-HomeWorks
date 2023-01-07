'use strict';
const onePotato = 0.075;
const fourPotato = 4 * onePotato;
const oneLiterBorscht = fourPotato;
const amountOfBorscht = +prompt('How much do you want to cook liter Ukrainian Borscht', '48');

const amountOfBorscht2 = oneLiterBorscht * amountOfBorscht

console.log('you need ' + amountOfBorscht2 + ' kilogram of potatoes to make ' + amountOfBorscht + ' liters of borscht');
const buyPlace = prompt('where do you want to buy potatoes (privoz) or (tavria)','privoz')

const oneKgPotatoMall = 13;
const sumUAHPotatoes = oneKgPotatoMall * amountOfBorscht2

switch (buyPlace) {
    case 'privoz':
        console.log('Privoz price potato: ' + Math.floor(sumUAHPotatoes) + 'uah')
        console.log('Tavria price potato: ' + Math.ceil(sumUAHPotatoes) + 'uah')
        break;
    case 'tavria':
        console.log('Tavria price potato: ' + Math.ceil(sumUAHPotatoes) + 'uah')
        console.log('Privoz price potato: ' + Math.floor(sumUAHPotatoes) + 'uah')
        break;
}