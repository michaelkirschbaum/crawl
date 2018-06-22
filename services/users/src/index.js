var mockups = require('./routes/users')

var express = require('express')
var app = express()

const PORT = 8080

app.use('/users', mockups)

app.listen(PORT, () => console.log("listening on port 8080"))
