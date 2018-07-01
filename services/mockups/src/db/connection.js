var mongoose = require('mongoose')

mongoose.connect('mongodb://mockups-db/test')

var db = mongoose.connection

var Schema = mongoose.Schema
var mockupsSchema = new Schema({
  name: String,
  uri: String
})

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('database connection successful')
})

var Mockup = mongoose.model('mockupModel', mockupsSchema)

module.exports = Mockup
