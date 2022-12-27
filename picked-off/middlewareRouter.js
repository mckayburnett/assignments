const express = require("express")
const middlewareRouter = express.Router()
const {v4: uuidv4} = require("uuid")

middlewareRouter.use("/", (req, res, next) => {
    req.body = { name: "McKay", age: 30 }
    next()
})

middlewareRouter.get("/", (req, res, next) => {
    res.send(req.body)
})
    





module.exports = middlewareRouter