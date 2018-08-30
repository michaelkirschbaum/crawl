var db = require('./connection')

function addUser(req, res, next) {
  db.none('INSERT INTO users(firstname) VALUES($1)', [req.query.name])
    .then(() => {
      res.send('user added')
    })
    .catch(error => {
      console.log('ERROR:', error)
    })
}

function getUser(req, res, next) {
  db.any('SELECT * FROM users')
    .then(data => {
      res.send(data)
    })
    .catch(error => {
      console.log('ERROR', error)
    })
}

module.exports = {
  addUser: addUser,
  getUser: getUser
}
