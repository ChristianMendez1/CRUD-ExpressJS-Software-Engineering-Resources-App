const express =require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const Resources = require('./models/resources')
const app = express();
const port = 3000
const resourcesController = require('./controllers/resources')

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json()); 

// Routes
app.use('/resources', resourcesController)

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.listen(port, () => {
    console.log(`Server is listening on, ${port}`)
});