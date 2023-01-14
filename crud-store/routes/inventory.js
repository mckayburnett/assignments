const express =  require("express")
const inventory = express.Router()
const Inventory = require("../models/inventory.js")

//get all
inventory.get("/", (req, res, next) => {
    Inventory.find((err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

//get one
inventory.get("/:itemId", (req, res, next) => {
    Inventory.findById((err, item) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

//post
inventory.post("/", (req, res, next) => {
    const newItem = new Inventory(req.body)
    newItem.save((err, savedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

//update
inventory.put("/:itemId", (req, res, next) => {
    Inventory.findOneAndUpdate(
        { _id: req.params.itemId },
        req.body,
        { new: true },
        (err, updatedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})

//delete one
inventory.delete("/:itemId", (req, res, next) => {
    Inventory.findOneAndDelete({ _id: req.params.itemId},
    (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`succesfully deleted item "${deletedItem.name}" from the database`)
    })
})

module.exports = inventory