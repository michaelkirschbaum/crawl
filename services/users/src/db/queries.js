var db = require('./connection')

function addUser(req, res, next) {
  db.none('INSERT INTO users(first, last, email, password) \
      VALUES($1, $2, $3, $4)',
      [req.query.first, req.query.last, req.query.email, req.query.password])
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
