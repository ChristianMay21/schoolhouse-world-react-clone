require('dotenv').config();
const multipart = require('connect-multiparty')
const multipartMiddleware = multipart()
const path = require('path')
const os = require('os')
const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')
const nodemailer = require("nodemailer")

var express = require('express')
var app = express()
app.use(express.static('.'))

app.get('/', function (req, res) {
    res.send('Hello world')
})

app.post('/tutorCert', multipartMiddleware, function(req, res) {
    console.log('files', req.files.data.path)
    let location = path.join('./uploads', 'upload.webm')
    console.log(location)
    fs.rename(req.files.data.path, location,()=>{
        console.log(`upload successful, file written to ${location}`)
        res.send(`upload successful, file written to ${location}`)
        ffmpeg.getAvailableCodecs((err, codecs) => {console.log(codecs)})
        postProcessing()
    })    
})

function postProcessing() {
    var command = new ffmpeg('./uploads/upload.webm');
    destFile = `upload+${Date.now()}.mp4`
    console.log('command time')
    command
        .audioCodec('aac')
        .videoCodec('libx264')
        .on('end', function() {
            console.log('audio codec has been converted successfully')
            nmailer(destFile)
            console.log('command done?')
        }).on('error', function(err) {
            console.log('an error happened: ' + err.message)
        })
        .save(`./processed/${destFile}`)
}

async function nmailer(attachment) {
    async function main() {
        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        })

        transporter.verify(function(error, success) {
            if(error) {
                console.log(error)
            } else {
                console.log("Server is ready to take our messages")
            }
        })
        console.log("attachment", attachment)
        let info = await transporter.sendMail({
            from: 'notschoolhouseworld@gmail.com',
            to: "christianmay21@gmail.com",
            subject: "Tutor Certification",
            text: "See video attached",

            attachments: [
                {filename: `${attachment}`, path: `./processed/${attachment}`}
            ]
        }, function(err, data) {
            if (err) {
                console.log('Error occurred: ', err)
            } else {
                console.log("Email sent")
            }

        })
    
        console.log("Message sent: %s", info.messageId)
    }
    main().catch(console.error);
}

app.listen(9000, function() {
    console.log('Example app listening on port 9000!')
})