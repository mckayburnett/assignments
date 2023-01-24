const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())
app.use(morgan("dev"))


mongoose.connect("mongodb://localhost:27017/db-methods", () => console.log("Connected to the db"))


app.use("/books", require("./routes/bookRouter.js"))
app.use("/authors", require("./routes/authorRouter.js"))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})



app.listen(9000, () => {
    console.log("Server is running on port 9000")
})