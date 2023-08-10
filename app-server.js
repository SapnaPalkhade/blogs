const express = require("express")
const morgan = require("morgan")
//const blogsRoutes = require("./routes/blogsRoutes")
const commentsRouter = require("./routes/commentsRouter")


const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use('/api/blogs',blogRouter)

module.exports = app