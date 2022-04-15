/*1) Sort an array from smallest number to largest
const arr = [1, 3, 5, 2, 90, 20]
arr.sort(function(a, b){
    return a - b
})
console.log(arr)
*/

/*2) Sort an array from largest number to smallest
const arr = [1, 3, 5, 2, 90, 20]
arr.sort(function(a, b){
    return b - a
})
console.log(arr)
*/

/*3) Sort an array from shortest string to longest
const arr = ["dog", "wolf", "by", "family", "eaten"]
arr.sort(function(a, b){
    return a.length - b.length
})
console.log(arr)
*/

/*4) Sort an array alphabetically

const arr = ["dog", "wolf", "by", "family", "eaten"]
arr.sort(function(a, b){
   if (a < b){
       return -1
   }
})
console.log(arr)
*/

/*5) Sort the objects in the array by age
const arr = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]
arr.sort(function(a, b){
    return a.age - b.age
})
console.log(arr)
*/