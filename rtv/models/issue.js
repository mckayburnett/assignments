const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    issue: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: false
    },
    likes:{
        type: Number,
        required: false
    },
    dislikes: {
        type: Number,
        required: false
    },
    reply: [{
        type: Schema.Types.ObjectId, 
        ref: "Reply",
        require: false
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model('Issue', issueSchema)