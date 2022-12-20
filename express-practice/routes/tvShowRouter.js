const express = require("express")
const {v4: uuidv4} = require("uuid")
const tvShowRouter = express.Router()

const tvShows = [
    { title: "Rick and Morty", _id: uuidv4() },
    { title: "Sons of Anarchy", _id: uuidv4() },
    { title: "Suits", _id: uuidv4() },
    { title: "The Office", _id: uuidv4() }
]

tvShowRouter.get("/", (req, res) => {
    res.send(tvShows)
})

tvShowRouter.get("/:tvShowId", (req, res) => {
    const tvShowId = req.params.tvShowId;
    const foundShow = tvShows.find(tvShow => tvShow._id === tvShowId)
    res.send(foundShow)
})

// tvShowRouter.route("/")
//     .get((req, res) => {
//         res.send(tvShows)
//     })
//     .post((req, res) => {
//         const newShow = req.body
//         newShow._id = uuidv4()
//         tvShows.push(newShow)
//         res.send(`Succesfully added ${newShow.title} to the database!`)
//     })

module.exports = tvShowRouter