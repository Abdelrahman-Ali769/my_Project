const express = require('express')
require("dotenv").config();
const mongoose = require('mongoose')
const UserRouter = require("./Routers/UserRouter.cjs")
const BookRouter = require("./Routers/BookRouter.cjs")
const app = express()
app.use(express.json())

// Connection to Database
const Uri = process.env.MONGO_URI
const PORT = process.env.MONGO_PORT

const ConnectToDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(Uri)
        console.log("Connection To Data base successfuly")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
ConnectToDB()

app.use('/', UserRouter)
app.use('/', BookRouter)
app.use((req, res) => {
    res.status(404).send({
        message: req.originalUrl + "Not Found"
    })
})
app.listen(PORT, () => {
    console.log(`Server Runing  ${PORT} .....` )
})
