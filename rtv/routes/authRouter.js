const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

//signup
authRouter.post('/signup', (req, res, next) => {
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
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            return res.status(201).send({ token, user: savedUser.withoutPassword() })
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
    
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err){
                res.status(403)
                return next(new Error("Username or Password is incorrect"))
            }
            if(!isMatch){
                res.status(403)
                return next(new Error("Username or Password is incorrect"))
            }
            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(200).send({ token, user })
        })
    })
})

//get username
authRouter.get('/username/:userId', (req, res, next) => {
    User.findOne({_id: req.params.userId}, (err, foundUsername) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundUsername.username)
    })
})

module.exports = authRouter 