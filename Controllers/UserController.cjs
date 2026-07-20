const UserModel = require("../Models/UserSchema.cjs")
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')

// Api Register
exports.Register = async (req, res) => {
    try {
        const newUser = new UserModel(req.body)
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        newUser.password = hashedPassword
        const User = await newUser.save()
        res.json({
            message: "User Register Successfuly",
            User: {
                name : User.name,
                role: User.role,
                phone: User.phone,
            }
        })
    } catch (error) {
        res.status(500).send({
            message: "Server Error"
        })
        console.log(error)
    }
}
//Api Login
exports.Login = async (req, res) => {
    try {
        const User = await UserModel.findOne({ phone: req.body.phone })
        if (!User ||  await(!User.comparePassword(req.body.password))) {
            res.status(404).send({
                message: "Invalid password or phone "
            })
        }
        const token = JWT.sign({
            _id: User._id,
            name: User.name,
            email: User.email,
            phone: User.phone,
            role: User.role,
        },process.env.JWT_SECRET,{expiresIn: '10m' })
        return res.json({
            message: " User Login Successfuly",
            User: {
                name: User.name,
                email: User.email,
                phone: User.phone,
                role: User.role,
                token: token
            }
        })
    }
    catch (error) {
        console.log(error)
        res.send({
            message: "Server error"
        })
    }


}