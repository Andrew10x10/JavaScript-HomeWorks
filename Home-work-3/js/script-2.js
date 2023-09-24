'use strict';

const operation = getUserOperator('Enter which operation you want to do (addition, subtraction, multiplication, or division):');

function getUserOperator(promptMessage) {
    while (true) {
        const userInput = prompt(promptMessage);

        if (userInput === null) {
            return null;
        }
        const normalizedInput = userInput.trim().toLowerCase();
        const validOperations = ['add', '+', 'addition', 'sub', '-', 'subtraction', 'mul', '*', 'multiplication', 'div', '/', 'division'];

        if (validOperations.includes(normalizedInput)) {
            return normalizedInput;
        } else {
            promptMessage = 'Please, enter a valid operation (+, -, *, /):';
        }
    }
}

function getUserNumber(promptMessage) {
    let userInput;
    do {
        userInput = prompt(promptMessage);

        if (userInput === null) {
            return null;
        }

        userInput = userInput.trim();

        if (userInput === '') {
            alert('You entered an empty value. Please enter a valid number.');
        } else {
            const parsedNumber = Number(userInput);

            if (isNaN(parsedNumber)) {
                alert('You entered an invalid number. Please enter a valid number.');
            } else {
                return parsedNumber;
            }
        }
    } while (true);
}

function calculate(operation, a, b) {
    let result;

    switch (operation) {
        case 'add':
        case '+':
        case 'addition':
            result = a + b;
            console.log(`${a} + ${b} = ${result}`);
            break;
        case 'subtraction':
        case '-':
        case 'sub':
            result = a - b;
            console.log(`${a} - ${b} = ${result}`);
            break;
        case 'multiplication':
        case '*':
        case 'mul':
            result = a * b;
            console.log(`${a} * ${b} = ${result}`);
            break;
        case 'division':
        case '/':
        case 'div':
            if (b === 0) {
                console.log("Division by zero is impossible.");
            } else {
                result = a / b;
                console.log(`${a} / ${b} = ${result}`);
            }
            break;
        default:
            console.log('Wrong operation.');
    }

    return result;
}

if (operation === null) {
    console.log("Operation canceled or invalid.");
} else {
    const first = getUserNumber('Enter the first number:');

    if (first === null) {
        console.log("Operation canceled or invalid.");
    } else {
        const second = getUserNumber('Enter the second number:');

        if (second === null) {
            console.log("Operation canceled or invalid.");
        } else {
            calculate(operation, first, second);
        }
    }
}









