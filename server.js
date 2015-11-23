var express = require('express'),
    app = express(),
    multer = require('multer'),
    upload = multer({ dest: 'uploads/' })
    
app.use(express.static('public'))
    
app.post('/upload', upload.array('file', 10), function(req, res) {
  console.log(req.files);
  res.sendStatus(200)
})

app.listen('8000')
console.log('server started')