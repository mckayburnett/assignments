const express = require('express')
const replyRouter = express.Router()
const Issue = require('../models/issue')
const User = require('../models/user')
const Reply = require('../models/reply')

//add reply
replyRouter.post('/:issueId', (req, res, next) => {
    req.body.user = req.auth._id
    const username = req.auth.user
    const issueId = req.params.id
    const newReply = new Reply({
        reply: req.body.reply,
        issue: issueId
    })
    newReply.save((err, savedReply) => {
        if(err){
            res.status(500)
            return next(err)
        }
        const issueRelated = Issue.findById(issueId) 
        issueRelated.reply.push(newReply)
        return res.status(201).send(savedReply)
    })
})

//get all replies

//get user replies  by id

//delete reply

//edit reply

//like reply... maybe



module.exports = replyRouter