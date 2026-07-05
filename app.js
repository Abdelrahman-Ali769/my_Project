const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const UserRouter =require('./Router/UserRouter.cjs')
const BookRouter =require('./Router/BookRouter.cjs')
const app = express()
app.use(bodyParser.json())

// connect to data Base 
const Uri = "mongodb://Abdelrahman123:Abdelrahman123@ac-scpetzk-shard-00-00.qd4ijnh.mongodb.net:27017,ac-scpetzk-shard-00-01.qd4ijnh.mongodb.net:27017,ac-scpetzk-shard-00-02.qd4ijnh.mongodb.net:27017/?ssl=true&replicaSet=atlas-fxo2av-shard-0&authSource=admin&appName=Cluster0"

const ConnectToDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(Uri)
        console.log("Connected to DB Successfuly")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
ConnectToDB()

app.use('/',UserRouter)
app.use('/',BookRouter)

app.use(async(req,res)=>{
res.status(404).send({
    return : req.originalUrl + 'Not found'
})
})
app.listen(8080 ,()=>{
    console.log("Server Runing.....")
})
