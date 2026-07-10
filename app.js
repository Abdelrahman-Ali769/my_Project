const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const UserRouter =require("./Routers/UserRouter.cjs")
const BookRouter =require("./Routers/BookRouter.cjs")
const app = express()
app.use(express.json())

// Connection to Database
const Uri = "mongodb://Abdelrahman123:Abdelrahman123@ac-scpetzk-shard-00-00.qd4ijnh.mongodb.net:27017,ac-scpetzk-shard-00-01.qd4ijnh.mongodb.net:27017,ac-scpetzk-shard-00-02.qd4ijnh.mongodb.net:27017/?ssl=true&replicaSet=atlas-fxo2av-shard-0&authSource=admin&appName=Cluster0"

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

app.use('/',UserRouter)
app.use('/',BookRouter)
app.use((req,res)=>{
res.status(404).send({
    message : req.originalUrl+  "Not Found"
})
})
app.listen(8000 ,()=>{
    console.log("Server Runing .....")
})
