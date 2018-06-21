var express = require('express')
var app = express()

const PORT = 8080

app.get('/', function(req, res) {
  res.send('crawlr')
})

app.get('/user', function(req, res) {
  res.send('')
})

app.listen(PORT, () => console.log("listening on port 8080"))
