var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<h1>QRFDEV Timestamp Microservice</h1>');
});

app.listen(process.argv[2], function () {
  console.log('Example app listening on port '+process.argv[2]+'!');
});