const express =require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const Resources = require('./models/resources')
const resourcesController = require('./controllers/resources')
const resourceData = require('./utilities/data.js')
const cors =require('cors')
const db = mongoose.connection

const app = express();
const mongoURI = process.env.MONGODB_URI
const PORT = 3001

mongoose.connect(mongoURI, { useNewUrlParser: true},
    () => console.log('MongoDB connection establish') ) 

db.on('error', err => console.log(err.message + 'Not Connecting'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json()); 
app.use(express.static('public'))
app.use(cors({ origin: '*' }))

// Routes
app.use('/resources', resourcesController)

app.listen(PORT, () => {
    console.log('Listening', PORT)
  })