const express = require('express')
const { userSignUp, userLogin, getUser } = require('../controller/user.controller')
const loginValidate = require('../middleware/login.validate')
const signupValid = require('../middleware/signup.validate')
const authValidate = require('../middleware/auth')
const userRoute = express.Router()


userRoute.use('/signup', signupValid, userSignUp)
userRoute.use('/login', loginValidate, userLogin)
userRoute.use('/', authValidate, getUser)


module.exports = userRoute