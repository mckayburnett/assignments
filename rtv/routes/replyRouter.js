const express = require('express')
const replyRouter = express.Router()
const Issue = require('../models/issue')
const User = require('../models/user')
const Reply = require('../models/reply')

//add reply
replyRouter.put('/:issueId', (req, res, next) => {
    console.log(req, res, "jessie", req.params.issueId);
    Issue.findOneAndUpdate(
        {_id: req.params.issueId},
        {$push: {reply: req.body.reply}},
        {upsert: true},
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


//get all replies

//get user replies  by id

//delete reply

//edit reply

//like reply... maybe



module.exports = replyRouter