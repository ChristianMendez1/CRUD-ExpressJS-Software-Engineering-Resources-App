const express =require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const Resources = require('./models/resources')
const app = express();
const port = 3000

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', ()=> {
//     console.log('connected to mongo');
// });

app.listen(port, () => {
    console.log(`Server is listening on, ${port}`)
});