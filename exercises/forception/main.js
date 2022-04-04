var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var newArray = []
var splitAlphabet = alphabet.split("");
//console.log(splitAlphabet)

function forecption(){

    for (i=0; i<people.length; i++){
        newArray.push(people[i] + ":");
            for (j=0; j<splitAlphabet.length; j++){
                newArray.push(splitAlphabet[j]);
            }
    }
    return newArray   
}
forecption();
console.log(newArray)

