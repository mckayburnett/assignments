const express = require("express")
const todoRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const todos = [
    {
        name: "Groceries",
        description: "Run to Peterson's to buy ingredients for dinner",
        imageUrl: "https://image.cnbcfm.com/api/v1/image/106963490-1634759952978-gettyimages-1308615771-dsc05921.jpeg?v=1634760396",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Car",
        description: "Jump start the Nissan",
        imageUrl: "https://vexgateway.fastly.carvana.io/2002164923/hero-no-letters.jpg",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "School",
        description: "Finish VSchool todo list assignment",
        imageUrl: "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/87/original/logo_dark_white_bg.jpg",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "TV",
        description: "Watch 'Suits' with wife",
        imageUrl: "https://flxt.tmsimg.com/assets/p8630071_b_h8_bc.jpg",
        completed: false,
        _id: uuidv4()
    }
]

todoRouter.route("/") 
    .get((req, res, next) => {
        res.send(todos)
    })
    .post((req, res, next) => {
        const newTodo = req.body
        newTodo._id = uuidv4()
        todos.push(newTodo)
        res.send(`Succesfully added ${newTodo.name} to the todo list!`)
    })
todoRouter.route("/:todoId")
    .delete((req, res, next) => {
        const todoId = req.params.todoId
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        todos.splice(todoIndex, 1)
        res.send(`Succesfully deleted todo item!`)
    })
    .put((req, res, next) => {
        const todoId = req.params.todoId
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        const updatedTodo = Object.assign(todos[todoIndex], req.body)
        res.send(updatedTodo)
    })

module.exports = todoRouter