var Mockup = require('./connection')

function addMockup(req, res, next) {
  const mockup = new Mockup({ name: 'project', uri: 'https://google.com' })

  mockup.save()
    .then(() => res.send('added'))
}

function getMockup(req,res, next) {
  Mockup.find(function(err, mockups) {
    if (err) return console.log(err)
    res.send(mockups)
  })
}

module.exports = {
  addMockup: addMockup,
  getMockup: getMockup
}
