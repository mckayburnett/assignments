/* Preliminaries
1.
for (i=0; i<10; i++){
    console.log(i)
}
*/

/* 
2.
for (i=10; i>0; i--){
    console.log(i)
}
*/

/*
3.
const fruit = ["banana", "orange", "apple", "kiwi"]
for (i=0; i<fruit.length; i++){
    console.log(fruit[i])
}
*/

/* Bronze */
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
const names = []
const occupations = []

/*
1.
for (i=0; i<peopleArray.length; i++){
    console.log(peopleArray[i].name)
}
*/
/
2.
for (i=0; i<peopleArray.length; i++){
    names.push(peopleArray[i].name);
    console.log(names);
}
for (i=0; i<peopleArray.length; i++){
    occupations.push(peopleArray[i].occupation);
    console.log(occupations);
}

