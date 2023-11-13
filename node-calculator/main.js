const readlineSync = require("readline-sync")

function add(){
    return +num1 + +num2
}
function subtract(){
    return num1 - num2
}
function multiply(){
    return num1 * num2
}
function divide(){
    return num1 / num2
}

const num1 = readlineSync.question("please enter your first number: ")
const num2 = readlineSync.question("please enter your second number: ")
const operation = readlineSync.question("please enter the operation to perform (add, subtract, multiply, divide):")

if(operation === "add"){
    console.log("the result is: ", add())
} else if(operation ==="subtract"){
    console.log("the result is: ", subtract())
} else if(operation === "multiply"){
    console.log("the result is: ", multiply())
} else if(operation === "divide"){
    console.log("the result is: ", divide())
} else{
    console.log("operation not recognized, please start again and only use 'add', 'subtract', 'multiply', or 'divide'.")
}