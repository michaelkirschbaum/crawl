var Mockup = require('./connection')
var AWS = require('aws-sdk')
var uuid = require('uuid')

AWS.config.update({region: 'us-west-2'})

function addMockup(req, res, next) {
  var s3 = new AWS.S3()
  var bucketName = 'crawlr' + uuid.v4()

  var uri = null

  const mockup = new Mockup({ name: req.body.name, uri: uri })

  mockup.save()
    .then(() => res.send('added mockup'))
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
