const express = require('express')
const replyRouter = express.Router()
const Issue = require('../models/issue')
const User = require('../models/user')
const Reply = require('../models/reply')

//add reply
replyRouter.put('/:issueId', (req, res, next) => {
    Issue.findOne( {_id: req.params.issueId}, (err, foundIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        const text = req.body
        const newReply = new Reply({
            text
        })
        foundIssue.updateOne(
            {reply : newReply},
            {new: true},
            (err, updatedReply) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedReply)
            }
        )
    })
    // Issue.findOneAndUpdate(
    //     {_id: req.params.issueId},
    //     {$push: {reply: req.body.text}},
    //     {new: true},
    //     (err, updatedReply) => {
    //         if(err){
    //             res.status(500)
    //             return next(err)
    //         }
    //         return res.status(201).send(updatedReply)
    //     }
    // )
})



//get all replies

//get user replies  by id

//delete reply

//edit reply

//like reply... maybe



module.exports = replyRouter