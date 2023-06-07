const express = require('express')
const issueRouter = express.Router()
const Issue = require('../models/issue')

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
            return res.status(200).send(`Succesfully deleted issue ${deletedIssue}`)
        }
    )
})

//update issue
issueRouter.put('/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate({ _id: req.params.issueId }, req.body, { new: true }, (err, updatedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedIssue)
    })
})

module.exports = issueRouter