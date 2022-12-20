const express = require("express")
const inventoryItemsRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

inventoryItemsRouter.get("/", (req, res) => {
    res.send(inventoryItems)
})

inventoryItemsRouter.get("/search/type", (req, res) => {
    const type = req.query.type;
    const filteredInventoryItem = inventoryItems.filter(item => item.type === type)
    res.send(filteredInventoryItem)
})

inventoryItemsRouter.get("/search/price", (req, res) => {
    const max = req.query.max;
    const min = req.query.min;
    const filteredInventoryItem = inventoryItems.filter(item => item.price < max && item.price > min);
    res.send(filteredInventoryItem)
})



module.exports = inventoryItemsRouter