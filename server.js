const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")
const colors = require("colors")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const errorHandler = require("./middelware/errorMiddleware")
const path = require("path")


// routes path
const authRoutes = require("./routes/authRoutes")
const geminiRoutes = require("./routes/geminiRoutes")

// dotenv
dotenv.config()

// mongo DB
connectDB()

// rest obj
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(errorHandler)

//api routes
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/gemini", geminiRoutes)

// use the client app
app.use(express.static(path.join(__dirname, '/client/build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

const PORT = process.env.PORT || 8080
//listen server
app.listen(PORT, () => {
    console.log(`server running in ${process.env.MODE} mode on port ${PORT}`.bgCyan.white)
})