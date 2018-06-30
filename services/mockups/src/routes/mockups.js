var express = require('express')
var router = express.Router()
var db = require('../db/queries')

router.get('/', function(req, res) {
  res.send('')
})

module.exports = router
