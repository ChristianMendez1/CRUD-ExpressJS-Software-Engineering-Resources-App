const mongoose = require('mongoose')

const resourceSchema = new mongoose.Schema({
   tutorials: String,
   jobboards: String,
   definitions: String,
   instructions: String,
})

const Resources = mongoose.model('Resource', resourceSchema)

module.exports = Resources