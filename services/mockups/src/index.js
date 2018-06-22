var mockups = require('./api/mockups/mockups')

var express = require('express')
var app = express()

const PORT = 8080

app.get('/', function(req, res) {
  res.send('')
})

app.use('/mockups', mockups)

app.listen(PORT, () => console.log("listening on port 8080"))
