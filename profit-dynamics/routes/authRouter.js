const express = require("express")
const authRouter = express.Router()
const User = require("../models/user.js")
const jwt = require("jsonwebtoken")

authRouter.post("/signup", (req, res, next) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(403)
            return next(new Error("That email is already taken"))
        }
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            return res.status(201).send({ token, user: savedUser.withoutPassord() })
        })
    })
})

authRouter.post("/login", (req, res, next) => {
    User.findOne({ email: req.body.email}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user){
            res.status(403)
            return next(new Error("Email or Password incorrect"))
        }
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err){
                res.status(403)
                return next(new Error("Email or Password incorrect"))
            }
            if(!isMatch){
                res.status(403)
                return next(new Error("Username or Password incorrect"))
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(200).send({ token, user })
        })
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.status(200).send({ token, user: user.withoutPassword() })
    })
})

module.exports = authRouter