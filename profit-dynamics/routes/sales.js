const express = require("express")
const data = express.Router()
const Data = require("../models/data.js")

//get all
data.get("/", (req, res, next) => {
    Data.find((err, data) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

//get one
data.get("/", (req, res, next) => {
    Data.findById((err, data) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

//post
data.post("/", (req, res, next) => {
    if (req.body.sales){
        Data.create(req.body.sales, function(err){
          if(err)
            res.send(err);
      
          else
            res.json(req.body);
        });
      }
      // Single JSON Object
      else {
        const newData = new Data(req.body)
        newData.save((err, savedData) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedData)
        })
    }
})
//update
data.put("/:dataId", (req, res, next) => {
    Data.findOneAndUpdate(
        { _id: req.params.dataId },
        req.body,
        { new: true },
        (err, updatedData) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedData)
        }
    )
})

//delete one
data.delete("/:dataId", (req, res, next) => {
    Data.findOneAndDelete({ _id: req.params.dataId },
    (err, deletedData) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Succesfully deleted sale from date ${deletedData.day}`)
    })
})

module.exports = data