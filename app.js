let app = require('express')()
let morgan = require('morgan')
let bodyparser = require('body-parser')
let monitor = require('./controllers/monitor')
let mongoose = require('mongoose')

app.use(morgan('dev'))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
// app.use(monitor())
app.use(require('./routes/routes.js'))

app.listen(3000, '127.0.0.1', () => {
  console.log("Server live at localhost:3000")
})