const express = require('express')
const USerController =require('../Controllers/UserControllers.cjs')
const router = express.Router()

// login api
router.post('/api/Login',USerController.Login)

// register api
router.post('/api/Register',USerController.Register)

module.exports = router