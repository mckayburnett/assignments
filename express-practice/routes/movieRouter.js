const express = require("express")
const movieRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const movies = [
    { title : 'die hard', genre : 'action', _id: uuidv4() },
    { title : 'star wars IV', genre : 'fantasy', _id: uuidv4() },
    { title : 'lion king', genre : 'fantasy', _id: uuidv4() },
    { title : 'friday the 13th', genre : 'horror', _id: uuidv4() }
]

// Get All
movieRouter.get("/", (req, res) => {
    res.send(movies)
})

// Get One
movieRouter.get("/:movieId", (req, res) => {
    const movieId = req.params.movieId;
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})

// Get by genre
movieRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre;
    const filteredMovies = movies.filter(movie => movie.genre === genre);
    res.send(filteredMovies)
})

// Post One
movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.send(`Succesfully added ${newMovie.title} to the database!`)
})

// Delete One
movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId;
    const movieIndex = movies.findIndex(movie => movie._id === movieId);
    movies.splice(movieIndex, 1);
    res.send("Succesfully deleted movie!")

})


// movieRouter.route("/")
//     .get((req , res) => {
//         res.send(movies)
//     })
//     .post((req , res) => {
//         const newMovie = req.body
//         newMovie._id = uuidv4()
//         movies.push(newMovie)
//         res.send(`Succesfully added ${newMovie.title} to the database!`)
//     })

module.exports = movieRouter