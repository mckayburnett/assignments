const express = require("express")
const app = express()


app.use(express.json())

app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvShows", require("./routes/tvShowRouter"))



app.listen(9000 , () => {
    console.log("This server is running on port 9000")
}) 
