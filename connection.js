const mongoose = require("mongoose")

const url = 'mongodb+srv://User1:nV67aqCLmiNlYNW2@cluster0.hqtzbir.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connection = async () =>{
    return mongoose.connect(url)
}

module.exports = connection;