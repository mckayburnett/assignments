const express = require('express')
const replyRouter = express.Router()
const Issue = require('../models/issue')
const User = require('../models/user')
const Reply = require('../models/reply')

//add reply
replyRouter.post('/', (req, res, next) => {
    req.body.user = req.auth._id
    //const username = req.auth.username
    const newReply = new Reply(req.body)
    newReply.save((err, savedReply) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(saveReply)
    })
})

//get all replies

//get user replies  by id

//delete reply

//edit reply

//like reply... maybe



module.exports = replyRouter