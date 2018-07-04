var Mockup = require('./connection')
var AWS = require('aws-sdk')
var uuid = require('uuid')
var path = require('path')
var fs = require('fs')

AWS.config.update({
  region: 'us-west-2'
})

var s3 = new AWS.S3()
var bucketName = 'crawlr' + uuid.v4()

s3.createBucket({Bucket: bucketName}, function(err, data) {
  if (err) console.log(err, err.stack)
  else console.log("created new s3 bucket", data.Location)
})

function addMockup(req, res, next) {
  var uploadLocation = ''
  var uploadParams = {
    Bucket: bucketName,
    Key: path.basename(req.body.file),
    Body: ''
  }

  var fileStream = fs.createReadStream(req.body.file);
  fileStream.on('error', function(err) {
    console.log('File Error', err);
  });
  uploadParams.Body = fileStream;

  s3.upload(uploadParams, function(err, data) {
    if (err) console.log("error uploading to s3", err)
    else uploadLocation = data.Location
  })

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
  getMockup: getMockup
}
