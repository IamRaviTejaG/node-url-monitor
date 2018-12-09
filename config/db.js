let mongoose = require('mongoose')
let dbconnect = mongoose.createConnection('mongodb://localhost:27017/monitor', {useNewUrlParser: true})
module.exports = dbconnect