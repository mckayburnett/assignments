const arrI = []
function count() {
    for (i=1; i<=100; i++) {
        if (i%3 === 0 & i%5 === 0) {
            arrI.push("FizzBuzz")
        } else if (i%3 === 0) {
            arrI.push("Fizz")
        } else if (i%5 === 0){
            arrI.push("Buzz") 
        } else {
            arrI.push(i)
        }
    }
   
}
count();
console.log(arrI)