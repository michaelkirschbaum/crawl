var Mockup = require('./connection')
var AWS = require('aws-sdk')
var uuid = require('uuid')
var path = require('path')

AWS.config.update({
  region: 'us-west-2'
})

var s3 = new AWS.S3()
var bucketName = 'crawlr' + uuid.v4()
var uri = null

s3.createBucket({Bucket: bucketName}, function(err, data) {
  if (err) console.log(err, err.stack)
  else console.log("created new s3 bucket", data.Location)
})

function addMockup(req, res, next) {
  var uploadParams = {
    Bucket: bucketName,
    Key: path.basename(req.body.uri),
    Body: ''
  }

/*
  var fs = require('fs');
  var fileStream = fs.createReadStream(file);
  fileStream.on('error', function(err) {
    console.log('File Error', err);
  });
  uploadParams.Body = fileStream;
*/

/*
  s3.upload(uploadParamas, function(err, data) {
    if (err) console.log("error uploading to s3", err)
    else console.log("upload successful", data.Location)
  })
*/
  const mockup = new Mockup({ name: req.body.name, uri: req.body.uri })
  console.log(uploadParams.Key)
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
