const express= require('express')
const singup = require('../controllers/userController')
const userRouter= express.Router()

userRouter.post('/', singup)

module.exports= userRouter