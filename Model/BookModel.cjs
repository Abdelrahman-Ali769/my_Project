const mongoose =require('mongoose')
const Schema = mongoose.Schema
const BookSchema = new Schema({
    name : String ,
    Author : String,
    Description : String ,
    Price: Number
})
module.exports =mongoose.model('Books' ,BookSchema)