const express = require("express")
const app = express()
const {v4: uuidv4} = require("uuid")

app.use(express.json())


app.get("/", require("./middlewareRouter.js"))



app.listen(9000, () => {
    console.log("Server is running on port 9000")
})