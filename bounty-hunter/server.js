const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/bountydb", () => console.log("connected to bounty database"))

app.use("/bounties", require("./routes/bountyRouter.js"))



app.listen(9000, () => {
    console.log("This server is running on port 9000")
})