var AWS = require('aws-sdk')
var uuid = require('uuid')

// initiate s3
AWS.config.update({
  region: 'us-west-2'
})

var s3 = new AWS.S3()
var bucketName = 'crawlr' + uuid.v4()
var corsConfig = {
  AllowedHeaders:["*"],
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

module.exports = {
  s3: s3,
  bucket: bucketName
}
