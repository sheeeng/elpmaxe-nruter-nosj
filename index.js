var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.type('text/plain')
  res.send('I am a beautiful caterpillar.')
})

app.listen(process.env.PORT || 4730)
