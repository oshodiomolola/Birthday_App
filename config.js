const mongoose = require ("mongoose")
require("dotenv").config()

function connect(){
    mongoose.connect(process.env.DB_URL)

    mongoose.connection.on("connected", ()=>{
        console.log("Database connection is successful")
    })

    mongoose.connection.on("error", (err)=>{
        console.log("Database connection failed", err)
    })
}

module.exports = { connect }