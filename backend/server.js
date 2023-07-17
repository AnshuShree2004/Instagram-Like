require('dotenv').config()

const app = require('./app.js')
const connectToDB = require('./confiq/db.confiq.js')
const PORT = process.env.PORT || 3002


app.listen(PORT, () => {
    connectToDB()
    console.log('Server is running at ',PORT)
})