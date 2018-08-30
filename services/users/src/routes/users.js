var express = require('express')
var router = express.Router()
var db = require('../db/queries')

router.post('/add', db.addUser)

router.get('/get', db.getUser)

module.exports = router
