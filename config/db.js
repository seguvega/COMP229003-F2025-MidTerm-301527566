require('dotenv').config()
const mongoose = require('mongoose');
let ConnectionString = "mongodb+srv://Admin_DB:asdgGJThtjy@cluster0.1lkwsbj.mongodb.net/midterm?retryWrites=true&w=majority&appName=Cluster0"

module.exports = function(){

    mongoose.connect(ConnectionString);

    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', ()=>{
        console.log('====> Connected to MongoDB.');
    })

    return mongodb;
}