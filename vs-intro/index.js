
let person = {
    name: "McKay",
    age: 29,
    hairColor: "black",
    isAlive: true,
    favorites: {
        food: "sushi",
        color: "red",
        place: "mountains"
    }
}
console.log(person.favorites.food);


const friends = ["dyllan", "anthony", "daven", "kyle"]
console.log(friends["dyllan"]);


function isGreaterThan(thisNum, thatNum) {
    let phrase
    if (thisNum > thatNum) {
        phrase = "greater than"
    } else {
        phrase = "less than"
    }
    return "this number is" + phrase + "that number"
}
console.log(isGreaterThan(9, 5));

var favTeams = ["jazz", "eagles", "utes"]
for (var i = 0; i < favTeams.length; i++)
    console.log(favTeams);

