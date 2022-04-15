const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
function sorted(arr){
const sortedOfAge = arr.filter(function(person){
    if (person.age > 18)
    return true
});

const sortedName = sortedOfAge.sort(function(a, b){
    if (a.lastName < b.lastName){
        return -1
    }
});

const stringed = sortedOfAge.reduce(function(final, people){
    final.push("<li>" + people.firstName + " " + people.lastName + " is " + people.age + "</li>")
    return final
}, []);
}
console.log(sorted(peopleArray));
