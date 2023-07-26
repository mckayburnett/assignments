const express = require('express')
const issueRouter = express.Router()
const Issue = require('../models/issue')
const User = require('../models/user')

//get all issues
issueRouter.get('/', (req, res, next) => {
    Issue.find((err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})



//get issues by user id
issueRouter.get('/user', (req, res, next) => {
    Issue.find({ user: req.auth._id }, (err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

//add new issue
issueRouter.post('/', (req, res, next) => {
    req.body.user = req.auth._id
    //const username = req.auth.username
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

//delete issue
issueRouter.delete('/:issueId', (req, res, next) => {
    Issue.findOneAndDelete({ _id: req.params.issueId, user: req.auth._id }, (err, deletedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Succesfully deleted issue: ${deletedIssue.issue}`)
        }
    )
})

//edit issue
issueRouter.put('/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId }, 
        req.body, 
        { new: true }, 
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})

//like issue ($addToSet might help with making it so you can only add one like per userId)
issueRouter.put('/like/:issueId', (req, res, next) => {
    Issue.findOne(
        {_id: req.params.issueId}, (err, foundIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            const liked = foundIssue.userLikes
            if(liked.includes(req.auth._id)){
                res.status(403)
                return next(new Error('Already liked post'))
            }
            foundIssue.updateOne(
                {$inc: {likes: 1}, $addToSet: {userLikes: req.auth._id}},
                {new: true},
                (err, updatedIssue) => {
                    if(err){
                        res.status(500)
                        return next(err)
                    }
                    return res.status(201).send(updatedIssue)
                }
            ) 
        }
    )
})
//dislike issue
issueRouter.put('/dislike/:issueId', (req, res, next) => {
    Issue.findOne(
        {_id: req.params.issueId}, (err, foundIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            const disliked = foundIssue.userDislikes
            if(disliked.includes(req.auth._id)){
                res.status(403)
                return next(new Error('Already disliked post'))
            }
            foundIssue.updateOne(
                {$inc: {dislikes: 1}, $addToSet: {userDislikes: req.auth._id}},
                {new: true},
                (err, updatedIssue) => {
                    if(err){
                        res.status(500)
                        return next(err)
                    }
                    return res.status(201).send(updatedIssue)
                }
            ) 
        }
    )
})

//add reply
// issueRouter.put('/reply/:issueId', (req, res, next) => {
//     Issue.findOneAndUpdate(
//         {_id: req.params.issueId},
//         {$push: {reply: req.body}},
//         (err, updatedReply) => {
//             if(err){
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(201).send(updatedReply)
//         }
//     )
// })

module.exports = issueRouter