const mongoose = require("mongoose")
const Schema = mongoose.Schema

const dataSchema = new Schema ({
    day: {
        type: String,
        required: true
    },
    orders: {
        type: Number,
        required: true
    },
    gross_sales: {
        type: Number,
        required: true
    },
    discounts: {
        type: Number,
        required: true
    },
    returns: {
        type: Number,
        required: true
    },
    net_sales: {
        type: Number,
        required: true
    },
    shipping: {
        type: Number,
        required: true
    },
    taxes: {
        type: Number,
        required: true
    },
    total_sales: {
        type: Number,
        required: true
    },
    units_per_transaction: {
        type: Number,
        required: true
    },
    Units: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Data", dataSchema)