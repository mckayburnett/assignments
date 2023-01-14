const mongoose = require("mongoose")
const Schema = mongoose.Schema 

const inventorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    category: String
})

module.exports = mongoose.model("Inventory", inventorySchema)