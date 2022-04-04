const readlineSync = require("readline-sync");

function add() {
    return +num1 + +num2
};
function subtract() {
    return num1 - num2
};
function multiply() {
    return num1 * num2
};
function divide() {
    return num1 / num2
};



const num1 = readlineSync.question("Please enter your first number: ");
const num2 = readlineSync.question("Please enter your second number: ");
const operation = readlineSync.question('Please enter the operation to perform (' + ['add', ' subtract', ' multiply', ' or divide): '])
    switch (operation) {
        case 'add':
            console.log('The result is: ' + add())
        break
        case 'subtract':
            console.log('The result is: ' + subtract())
        break
        case 'multiply':
            console.log('The result is: ' + multiply())
        break
        case 'divide':
            console.log('The result is: ' + divide())
        break
    };