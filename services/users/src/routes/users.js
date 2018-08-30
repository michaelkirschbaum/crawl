var express = require('express')
var router = express.Router()
var db = require('../db/connection')

router.get('/add', function(req, res) {
  db.one('INSERT INTO users(firstname) VALUES($1) RETURNING id', ['Michael'])
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log('ERROR:', error)
    })
})

router.get('/get', function(req, res) {
  res.send('user')
})

module.exports = router
