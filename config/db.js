const mongoose = require("mongoose")
const colors = require("colors")

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.DB_URL)
        console.log(`connected to mongo DB ${mongoose.connection.host}`.bgGreen.white)
    } catch (error) {
        console.log(`mongodb DB error: ${error}`.bgRed.white)
    }
}

module.exports = connectDB