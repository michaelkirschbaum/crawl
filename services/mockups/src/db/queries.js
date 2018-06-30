var db = require('./connection')

function addMockup(req, res, next) {
  res.send('mockup added')
}

function getMockup(req,res, next) {
  res.send('received mockup')
}

module.exports = {
  addMockup: addMockup,
  getMockup: getMockup
}
