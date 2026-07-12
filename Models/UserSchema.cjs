const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    name: {
        type: String,
        require: true,
        minlength: [3, "The name must be at least 3 characters"],
        maxlength: [30, "Name can't exceed 30 characters"],
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email"]
    },
    role: String,
    age: {
        type: Number,
        require: true,
        min: 18,
        max: 60
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/^01[0125][0-9]{8}$/, "Invalid Egyptian phone number"]
    },
    password: {
        type: String,
        minlength: [6, "The password  must be at least 6 parameters"],
    }
})
UserSchema.methods.comparePassword = async (password) => {
    return await bcrypt.compare(password, this.password)
}
module.exports = mongoose.model("User", UserSchema)