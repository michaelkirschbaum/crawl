var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('')
})

app.get('/user', function(req, res) {
  res.send('')
})

app.listen(8080, () => console.log("listening on port 8080"))
