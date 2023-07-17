const express = require('express')
const cookieParser = require('cookie-parser');
const cors = require('cors') 

const  userRoute  = require('./route/user.route')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: [process.env.CLIENT_URL],
    credentials: true
}))

app.use('/', userRoute)



module.exports = app