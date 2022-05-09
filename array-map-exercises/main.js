/*1) Make an array of numbers that are doubles of the first array

const arr = [2, 5, 100]
const doubleNumbers = arr.map(function(num){
    return num * 2
})
console.log(doubleNumbers)
*/

/*2) Take an array of numbers and make them strings

const arr = [2, 5, 10]
const stringItUp = arr.map(function(num){
    return num.toString()
})  
console.log(stringItUp)
*/

/*3) Capitalize the first letter of each name and make the rest of the characters lowercase**

const arr = ["john", "JACOB", "jinGleHeimer", "schmidt"]
const capitalizeNames = arr.map(function(name){
    const allLower = name.toLowerCase()
    const splitNames = allLower.split("")
    const firstCap = splitNames[0].toUpperCase()
    const spliced = splitNames.splice(1)
    const joined = spliced.join("")
    return firstCap + joined
})
 console.log(capitalizeNames)
 */

/*4) Make an array of strings of the names

const arr = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const namesOnly = arr.map(function(name1){
    const names = name1.name
    const string = names.toString()
    return string
})
console.log(namesOnly)*/

/*5) Make an array of strings of the names saying whether or not they can go to The Matrix

arr = [
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
]
const matrix = arr.map(function(name1){
    const names = name1.name
    const ages = name1.age
    const strName = names.toString()
    if (ages >= 18){
        return strName + " can go to the Matrix!"
    } else if (ages < 18){
        return strName + " is under age."
    }
})
console.log(matrix)
*/

//6) Make an array of the names in `h1`s, and the ages in `h2`s
const arr = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
const readyToPutInTheDOM = arr.map(function(data){
    const names = data.name
    const ages = data.age
    return "<h1>" + names + "</h1>" + "<h2>" + ages + "</h2>"
})
console.log(readyToPutInTheDOM)
