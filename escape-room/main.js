const readline = require("readline-sync");
const name = readline.question("What is your name? ");
    console.log('Hello, ' + name + ', welcome to the Escape Room. You have three options to escape... Choose carefully.')
    console.log('1. Put hand in hole.')
    console.log('2. Find key.')
    console.log('3. Open door.');

function o1() {
    console.log('There was a poisonous spider in the hole. It bit your hand and you slowly died.')
}; 
function o2() {
    console.log('You found a key. Which option would you like to select now? (1, 2, or 3)')
};
function o3() {
    console.log('Unable to open without key. Please select a new option.')
};
function o4() {
    console.log('Congratulations! You have escaped!')
};
function o5() {
    console.log('Please select a new option.')
};
var option = readline.question('Please enter which option you would like to choose (' + ['1', ' 2', ' or 3): '])
    switch (option) {
        case '1':
            console.log(o1())
        break
        case '2':
            console.log(o2()) 
                var option = readline.question()
                    switch (option) {
                        case '1':
                            console.log(o1())
                        break
                        case '2':
                            console.log(o5())
                        break
                        case '3':
                            console.log(o4())
                    }
        break
        case '3':
            console.log(o3())
                var option = readline.question()
                    switch (option) {
                        case '1':
                            console.log(o1())
                        break
                        case '2':
                            console.log(o2())
                                var option = readline.question()
                                    switch (option) {
                                        case '1':
                                            console.log(o1())
                                        break 
                                        case '2':
                                            console.log(o5())
                                        break
                                        case '3':
                                            console.log(o4())
                                        break
                                    }
                        break
                        case '3':
                            console.log(o5())
                                var option = readline.question()
                                    switch (option) {
                                        case '1':
                                            console.log(o1())
                                        break
                                        case '2':
                                            console.log(o2())
                                            var option = readline.question()
                                            switch (option) {
                                                case '1':
                                                    console.log(o1())
                                                break 
                                                case '2':
                                                    console.log(o5())
                                                break
                                                case '3':
                                                    console.log(o4())
                                                break
                                            }
                                        

                                    }
                    }            
    }
