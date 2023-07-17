const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://0.0.0.0/Instagram"

const connectToDB = () => {
    mongoose
    .connect(MONGODB_URL)
    .then((conn) => {
        console.log(`Connected to MONGODB_URL : ${conn.connection.host}`)

    })
    .catch((e) => console.log("Not connected to DataBase due to this error", e))
}

module.exports = connectToDB