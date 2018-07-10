var Mockup = require('./connection')
var AWS = require('aws-sdk')
var uuid = require('uuid')

// initiate s3
AWS.config.update({
  region: 'us-west-2'
})

var s3 = new AWS.S3()
var bucketName = 'crawlr' + uuid.v4()

s3.createBucket({Bucket: bucketName}, function(err, data) {
  if (err) console.log(err, err.stack)
  else console.log("created new s3 bucket", data.Location)
})

function signUrl(req, res, next) {
  const { fileName } = req.query

  var s3Params = {
    Bucket: bucketName,
    Key: fileName
  }
  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.error(err)
    } else {
      res.json({
        signedRequest: data,
        url: `https://${bucketName}.s3.amazonaws.com/${fileName}`
      })
    }
  })
}

function addMockup(req, res, next) {
  // save location of file in s3
  const mockup = new Mockup({ name: req.body.name, uri: uploadLocation })
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
  signUrl: signUrl,
  getMockup: getMockup
}
