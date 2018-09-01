var mockups = require('./routes/users')
var express = require('express')
var cors = require('cors')
var app = express()

const PORT = 8080

app.use(cors())
app.use('/users', mockups)

app.listen(PORT, () => console.log("listening on port 8080"))
