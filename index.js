var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('crawl')
})

app.listen(3000, () => console.log("listening on port 3000"))
