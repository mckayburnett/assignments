const express = require("express")
const app = express()
const morgan = require("morgan")


app.use(express.json())
app.use(morgan("dev"))

app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvShows", require("./routes/tvShowRouter"))



app.listen(8000 , () => {
    console.log("This server is running on port 8000")
}) 
