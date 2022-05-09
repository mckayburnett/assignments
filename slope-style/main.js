/*REST
function collectAnimals(...animals) {
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "dodo bird"));
*/

/*function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))
*/

/*Use destructuring to use the property names as variables. Desructure the object in the parameter:
const vacation = {
    location: 'Burly Idaho',
    duration: '2 weeks'
}
function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  } 
console.log(parseSentence(vacation))
*/

/*Use array destructuring to make this code ES6:
function returnFirst(items){
    const [firstItem] = items => firstItem
}
*/

/*Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const firstFav = arr[4];
    const secondFav = arr[1];
    const thirdFav = arr[2];
    return `My top three favortie activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
}
console.log(returnFavorites(favoriteActivities))
*/

/*Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.
function combineAnimals(...animalArrs) {
    const combined = newArr.concat(...animalArrs)
    return combined
}
const newArr = []
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));
*/

/*Try to make the following function more ES6y:
const product = (...items) => {
    var numbers = [...items];
  
    return numbers.reduce((acc, number=1) => acc * number)
}
console.log(product(1,2,3,4,5,7,8))
*/

/*Make the following function more ES6y. Use at least both the rest and spread operators:
const unshift = (array, ...items) => [array,...items]
console.log(unshift(1,2,3,4,5,6,7,8,9))
*/

/*Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:
const populatePeople = (names) => names.map(function(name){
        name = name.split(" ");
        const firstName = name[0]
        const lastName = name[1]
        return {
            firstName,
            lastName
        }
    })
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
*/
