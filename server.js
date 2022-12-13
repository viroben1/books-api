// DEPENDENCIES
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

// MIDDLEWARE
require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongo on: ', process.env.MONGO_URI)
})
// ROUTES
app.get('/', function (req, res){
    res.send('Hello world')
    })
    

 
const booksControllers = require('./controllers/books_controllers.js')
app.use('/books', booksControllers)

// LISTEN
app.listen(PORT, () => {
  console.log('Greetings! From port: ', PORT);
})