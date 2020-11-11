const express = require('express')
const cors = require('cors')
var multer = require('multer')
var upload = multer({ dest: 'uploads/'})
const path = require('path')

//Set Storage Engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname), )
    }
});

//Init Upload

const app = express()
app.use(cors())
const port = 9000

app.use(express.static('./public'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/testAPI', (req, res) => {
    res.send('API success')
  })

app.post('/tutorCert', (req, res) => {
    console.log('detected post request')
    console.log(res)
    console.log(req.body)
    console.log(req.file)
    console.log(req.action)
    console.log(typeof req)
    console.log(Object.keys(req))
    console.log(req.query)
    console.log(req.params)
    console.log(req.route)
    console.log('end of post request detection')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})