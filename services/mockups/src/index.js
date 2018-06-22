var mockups = require('./routes/mockups')

var express = require('express')
var app = express()

const PORT = 8080

app.use('/mockups', mockups)

app.listen(PORT, () => console.log("listening on port 8080"))
