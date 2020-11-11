const multipart = require('connect-multiparty')
const multipartMiddleware = multipart()
const path = require('path')
const os = require('os')
const fs = require('fs')

var express = require('express')
var app = express()
app.use(express.static('.'))

app.get('/', function (req, res) {
    res.send('Hello world')
})

app.post('/tutorCert', multipartMiddleware, function(req, res) {
    console.log('files', req.files.data.path)
    let location = path.join(os.tmpdir(), 'upload.webm')
    fs.rename(req.files.data.path, location,()=>{console.log('callback!')})
    console.log(`upload successful, file written to ${location}`)
    res.send(`upload successful, file written to ${location}`)
})

app.listen(9000, function() {
    console.log('Example app listening on port 9000!')
})