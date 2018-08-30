var db = require('./connection')

function addUser(req, res, next) {
  db.none('INSERT INTO users(firstname) VALUES($1)', ['test'])
    .then(() => {
      res.send('user added')
    })
    .catch(error => {
      console.log('ERROR:', error)
    })
}

function getUser(req, res, next) {
  res.send('user')
}

module.exports = {
  addUser: addUser,
  getUser: getUser
}
