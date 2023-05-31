const mongoose = require('mongoose')

const resourceSchema = new mongoose.Schema({
   tutorialtitles: String,
   tutorialurls: String,
   jobboards: String,
   definitiontitles: String,
   definitions: String
})

const Resources = mongoose.model('Resource', resourceSchema)

module.exports = Resources