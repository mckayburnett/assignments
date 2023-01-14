const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/crud-store-db", () => console.log('connected to database'))


app.use("/", require("./routes/inventory.js"))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("The server is running on port 9000")
})