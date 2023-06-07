const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

//signup
authRouter.post('signup', (req, res, next) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(403)
            return next(new Error('That username is already taken'))
        }
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
            return res.status(201).send({ token, user: savedUser })
        })
    })
})

//login
authRouter.post('/login', (req, res, next) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user){
            res.status(403)
            return next(new Error('Username and/or Password incorrect'))
        }
        if(req.body.password !== user.password){
            res.status(403)
            return next (new Error('Username and/or Password incorrect'))
        }
        const token = jwt.sign(user.toObect(), process.env.SECRET)
        return res.status(200).send ({ token, user })
    })
})

module.exports = authRouter 