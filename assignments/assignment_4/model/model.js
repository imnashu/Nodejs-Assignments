const mongoose = require('mongoose')
const schema = mongoose.Schema

const userschema = new schema ({
    name : String,
    email : String,
    isPromoted : Boolean
})

const userdb = mongoose.model('userdb' , userschema);

module.exports = userdb;