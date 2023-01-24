const express = require("express")
const authorRouter = express.Router()
const Author = require("../models/author.js")

//Get all authors
authorRouter.get("/", (req, res, next) => {
    Author.find((err, authors) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res. status(200).send(authors)
    })
})

//Add new author
authorRouter.post("/", (req, res, next) => {
    const newAuthor = new Author(req.body)
    newAuthor.save((err, savedAuthor) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedAuthor)
    })
})

//Delete one author
authorRouter.delete("/:authorID", (req, res, next) => {
    Author.findOneAndDelete({_id: req.params.authorID},
        (err, deletedAuthor) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Succesfully deleted ${deletedAuthor.name} from the database.`)
        })
})

module.exports = authorRouter