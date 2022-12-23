const mongoose = require('mongoose')
const dotenv=require('dotenv').config()
const uri=`mongodb+srv://pp2:bitos12345@cluster0.imgnu.mongodb.net/Users?retryWrites=true&w=majority`

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri)

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
