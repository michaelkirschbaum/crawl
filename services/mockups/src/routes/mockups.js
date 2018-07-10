var express = require('express')
var router = express.Router()
var db = require('../db/queries')

router.post('/add', db.addMockup)

router.get('/signUrl', db.signUrl)

router.get('/get', db.getMockup)

module.exports = router
