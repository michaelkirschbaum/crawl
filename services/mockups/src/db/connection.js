var mongoose = require('mongoose')

mongoose.connect('mongodb://mockups-db/test')
var db = mongoose.connection
var schema = mongoose.Schema

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('database connected')
})
