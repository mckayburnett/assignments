/*1) Turn an array of numbers into a total of all the numbers
const arr = [1,2,3]
const total = arr.reduce(function(final, num){
    final += num
    return final
})
console.log(total)
*/

/*2) Turn an array of numbers into a long string of all those numbers
const arr = [1,2,3]
const string = arr.reduce(function(final, num){
    final.push(num + "")
    return final
}, [])
console.log(string)
*/

/*3) Turn an array of voter objects into a count of how many people voted
const arr = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
const voteCount = arr.reduce(function(final, voter){
    if (voter.voted){
        final++
    } 
    return final
}, 0)
console.log(voteCount)
*/

/*4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
const wishList = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]
const total = wishList.reduce(function(final, money){
    final += money.price
    return final
}, 0)
console.log(total)
*/

/*5) Given an array of arrays, flatten them into a single array
const arr = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]
const sngArr = arr.reduce(function(final, data){
    return final.concat(data)
})
console.log(sngArr)
*/

//6) Given an array of potential voters, return an object representing the results of the vote
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
function sortedVoters(arr){
    return arr.reduce(function(final, voter){
        if (voter.age <= 25){
            final.numYoungPeople++
        } else if (voter.age > 25 && voter.age < 36){
            final.numMidPeople++
        } else if (voter.age > 35){
            final.numOldsPeople++
        };
        if (voter.age <= 25 && voter.voted){
            final.numYoungVotes++
        } else if (voter.age > 25 && voter.age < 36 && voter.voted){
            final.numMidVotesPeople++
        } else if (voter.age > 35 && voter.voted){
            final.numOldVotesPeople++
        };
        return final
    }, {numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople: 0, numMidPeople : 0, numOldVotesPeople: 0, numOldsPeople: 0})
}
console.log(sortedVoters(voters))
