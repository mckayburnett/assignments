const mongoose = require('mongoose')
const Schema = mongoose.Schema

const replySchema = new Schema({
    text: {
        type: Array,
        required: true
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    likes:{
        type: Number,
        required: false
    },
    dislikes: {
        type: Number,
        required: false
    }
})

module.exports = mongoose.model('Reply', replySchema)