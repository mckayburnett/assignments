var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
const splitPhrase = input.split("")
const indexes = []
const newPhrase = []
const newArray=[]
for (let i=0; i<splitPhrase.length; i++){
    splitPhrase[i]==='a' &&  indexes.push(0 + shift),
    splitPhrase[i]==='b' &&  indexes.push(1 + shift),
    splitPhrase[i]==='c' &&  indexes.push(2 + shift),
    splitPhrase[i]==='d' &&  indexes.push(3 + shift),
    splitPhrase[i]==='e' &&  indexes.push(4 + shift),
    splitPhrase[i]==='f' &&  indexes.push(5 + shift),
    splitPhrase[i]==='g' &&  indexes.push(6 + shift),
    splitPhrase[i]==='h' &&  indexes.push(7 + shift),
    splitPhrase[i]==='i' &&  indexes.push(8 + shift),
    splitPhrase[i]==='j' &&  indexes.push(9 + shift),
    splitPhrase[i]==='k' &&  indexes.push(10 + shift),
    splitPhrase[i]==='l' &&  indexes.push(11 + shift),
    splitPhrase[i]==='m' &&  indexes.push(12 + shift),
    splitPhrase[i]==='n' &&  indexes.push(13 + shift),
    splitPhrase[i]==='o' &&  indexes.push(14 + shift),
    splitPhrase[i]==='p' &&  indexes.push(15 + shift),
    splitPhrase[i]==='q' &&  indexes.push(16 + shift),
    splitPhrase[i]==='r' &&  indexes.push(17 + shift),
    splitPhrase[i]==='s' &&  indexes.push(18 + shift),
    splitPhrase[i]==='t' &&  indexes.push(19 + shift),
    splitPhrase[i]==='u' &&  indexes.push(20 + shift),
    splitPhrase[i]==='v' &&  indexes.push(21 + shift),
    splitPhrase[i]==='w' &&  indexes.push(22 + shift),
    splitPhrase[i]==='x' &&  indexes.push(23 + shift),
    splitPhrase[i]==='y' &&  indexes.push(24 + shift),
    splitPhrase[i]==='z' &&  indexes.push(25 + shift),
    splitPhrase[i]===' ' && indexes.push(' ')
}


for (let i=0; i<indexes.length; i++){
    indexes[i]>=26 ? newArray.push(indexes[i]-26) : newArray.push(indexes[i]);
}


for (let i =0; i<newArray.length; i++){
    newArray[i]===0 && newPhrase.push('a')
    newArray[i]===1 && newPhrase.push('b')
    newArray[i]===2 && newPhrase.push('c')
    newArray[i]===3 && newPhrase.push('d')
    newArray[i]===4 && newPhrase.push('e')
    newArray[i]===5 && newPhrase.push('f')
    newArray[i]===6 && newPhrase.push('g')
    newArray[i]===7 && newPhrase.push('h')
    newArray[i]===8 && newPhrase.push('i')
    newArray[i]===9 && newPhrase.push('j')
    newArray[i]===10 && newPhrase.push('k')
    newArray[i]===11 && newPhrase.push('l')
    newArray[i]===12 && newPhrase.push('m')
    newArray[i]===13 && newPhrase.push('n')
    newArray[i]===14 && newPhrase.push('o')
    newArray[i]===15 && newPhrase.push('p')
    newArray[i]===16 && newPhrase.push('q')
    newArray[i]===17 && newPhrase.push('r')
    newArray[i]===18 && newPhrase.push('s')
    newArray[i]===19 && newPhrase.push('t')
    newArray[i]===20 && newPhrase.push('u')
    newArray[i]===21 && newPhrase.push('v')
    newArray[i]===22 && newPhrase.push('w')
    newArray[i]===23 && newPhrase.push('x')
    newArray[i]===24 && newPhrase.push('y')
    newArray[i]===25 && newPhrase.push('z')
    newArray[i]===' ' && newPhrase.push(' ')
}



const caesar = newPhrase.join('')
console.log(caesar)
