var express = require('express')
var router = express.Router()
var db = require('../db/queries')

router.get('/add', db.addMockup)

module.exports = router
