var express = require('express')
var router = express.Router()
var db = require('../db/connection')

router.get('/add', function(req, res) {
  try {
    const id = yield db.none('INSERT INTO users(name, active) VALUES($1, $2) RETURNING id', ['Michael', true])

    res.send(id)
  } catch(e) {
    // error
  }
})

router.get('/get', function(req, res) {
  res.send('user')
})

module.exports = router
