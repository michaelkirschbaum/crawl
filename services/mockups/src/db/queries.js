var Mockup = require('./connection')
var AWS = require('../../helpers/aws')

function signUrl(req, res, next) {
  const { method, fileName, fileType } = req.query

  var s3Params = {
    Bucket: AWS.bucket,
    Key: fileName
  }

  // if request method is 'put', assign content type
  if (fileType)
    s3Params.ContentType = fileType

  AWS.s3.getSignedUrl(method + 'Object', s3Params, (err, data) => {
    if (err) {
      console.error(err)
    } else {
      res.json({
        signedRequest: data,
        url: `https://${AWS.bucket}.s3.amazonaws.com/${fileName}`
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
