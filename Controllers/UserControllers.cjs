const UserModel = require('../Model/UserModel.cjs')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// Register api
exports.Register = async function (req, res) {
    try {
        let newUser = new UserModel(req.body)
        const HasedPassword = await bcrypt.hash(req.body.password, 10) // salt dshgs@4$nzdv
        newUser.password = HasedPassword;
        let User = await newUser.save()
        res.json({
            message: " User added Successfuly",
            User: {
                name: User.name,
                phone: User.phone,
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            message: "Server error"
        })
    }
}

// login api 
exports.Login = async function (req, res) {
    try {
        let User = await UserModel.findOne({ phone: req.body.phone })
        if (!User || !User.comparePassword(req.body.password)) {
            return res.json({
                message: "Invalid password or phone"
            })
        }
        const token = jwt.sign({
            _id: User._id,
            name: User.name,
            email: User.email,
            phone: User.phone
        }, 'secret')
        return res.json({
            message: " User Register Successfuly",
            User: {
                name: User.name,
                email: User.email,
                phone: User.phone,
                token: token
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            message: "Server error"
        })
    }
}

