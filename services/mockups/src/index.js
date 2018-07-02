var express = require('express')
var app = express()
var mockups = require('./routes/mockups')
var bodyParser = require('body-parser')
var cors = require('cors')

const PORT = 8080

app.use(cors())
app.use(bodyParser.json())
app.use('/mockups', mockups)

app.listen(PORT, () => console.log("listening on port 8080"))
