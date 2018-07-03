var Mockup = require('./connection')
var AWS = require('aws-sdk')
var uuid = require('uuid')

AWS.config.update({
  region: 'us-west-2'
})

var s3 = new AWS.S3()
var bucketName = 'crawlr' + uuid.v4()
var uri = null

s3.createBucket({Bucket: bucketName}, function(err, data) {
  if (err) console.log(err, err.stack)
  else uri = data.Location
})

function addMockup(req, res, next) {
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
