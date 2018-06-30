var db = require('./connection')

function addMockup(req, res, next) {
  res.send('mockup added')
}

module.exports = {
  addMockup: addMockup
}
