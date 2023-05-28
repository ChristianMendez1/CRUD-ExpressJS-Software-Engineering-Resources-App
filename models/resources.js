const mongoose = require('mongoose')

const resourceSchema = new mongoose.Schema({
   tutorials: String
})

const Resources = mongoose.model('Resource', resourceSchema)

module.exports = Resources