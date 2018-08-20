var Mockup = require('./connection')
var AWS = require('aws-sdk')
var uuid = require('uuid')

// initiate s3
AWS.config.update({
  region: 'us-west-2'
})

var s3 = new AWS.S3()
var bucketName = 'crawlr' + uuid.v4()
var corsConfig = {
  AllowedHeaders:["Authorization"],
  AllowedMethods:["PUT", "POST", "DELETE"],
  AllowedOrigins:["*"],
  ExposeHeaders:[],
  MaxAgeSeconds:3000
}

var corsParams = {
  Bucket: bucketName,
  CORSConfiguration: {CORSRules: new Array(corsConfig)}
}

s3.createBucket({Bucket: bucketName}, function(err, data) {
  if (err)
    console.log(err, err.stack)
  else {
    console.log("created new s3 bucket", data.Location)

    // set bucket cors
    s3.putBucketCors(corsParams, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
      }
    })
  }
})

// set cors for bucket
var corsConfig = {
  AllowedHeaders:["Authorization"],
  AllowedMethods:["PUT", "POST", "DELETE"],
  AllowedOrigins:["*"],
  ExposeHeaders:[],
  MaxAgeSeconds:3000
}

var corsParams = {
  Bucket: bucketName,
  CORSConfiguration: {CORSRules: new Array(corsConfig)}
}
s3.putBucketCors(corsParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
})

function signUrl(req, res, next) {
  const { fileName, fileType } = req.query

  var s3Params = {
    Bucket: bucketName,
    Key: fileName,
    ContentType: fileType
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
  const mockup = new Mockup({ name: req.query.name, uri: req.query.location })
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
