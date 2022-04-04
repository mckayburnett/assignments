//Write a function that takes an array of numbers and returns the largest (without using Math.max())
/*function findLargest(...nums){
    const sorted = nums.sort((a,b)=>b-a);
    const largest = sorted.splice(0,1);
    return largest;
}
console.log(findLargest(2,7,8,54,6))*/

//Write a function that takes an array of words and a character and returns each word that has that character present.
/*function findChar(arr , symbol){
    const wordsWithSymbol = [];
    for (i=0; i<arr.length; i++){
        if (arr[i].includes(symbol)){
            wordsWithSymbol.push(arr[i])
        }
    }
    return wordsWithSymbol
}
console.log(findChar(["hello!", "what's up?", "cool!"], "!"))*/

//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
function isDivisible(num1, num2){
    if (num1%num2 === 0){
        return "yes!"
    } else {
        return "no!"
    }
}
console.log(isDivisible(4,2))