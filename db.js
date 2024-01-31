const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const MONGO_URL = process.env.MONGO_URL
function connect(){
    try {
        mongoose.connect(MONGO_URL)
        .then(console.log('🐱🐱'))
    } catch (error) {
        console.log('MongoDB Error:', error);
    }
}
module.exports = {connect}