var express = require('express')
var app = express()
var mockups = require('./routes/mockups')
var bodyParser = require('body-parser')

const PORT = 8080

app.use(bodyParser.json())

app.use('/mockups', mockups)

app.listen(PORT, () => console.log("listening on port 8080"))
