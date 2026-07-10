const express =require('express')
const UserController =require("../Controllers/UserController.cjs")
const router =express.Router()

//Api Login
router.post('/api/Login',UserController.Login)

//Api Register
router.post('/api/Register',UserController.Register)

module.exports =router