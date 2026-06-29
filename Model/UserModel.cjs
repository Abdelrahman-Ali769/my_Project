const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    phone: { type: String, unique: true },
    password: String
})
UserSchema.methods.comparePassword = async (password) => {
    return await bcrypt.compare(password, this.password)
}
module.exports = mongoose.model('User', UserSchema)