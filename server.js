const express =require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const Resources = require('./models/resources')
const app = express();
const port = 3001
const resourcesController = require('./controllers/resources')
const cors =require('cors')

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json()); 
app.use(cors({ origin: '*' }))

// Routes
app.use('/resources', resourcesController)

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.listen(port, () => {
    console.log(`Server is listening on, ${port}`)
});