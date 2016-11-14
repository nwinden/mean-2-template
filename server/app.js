var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//middlewear

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//start the server
app.set('port', 5000);
app.listen(app.get('port'), function () {
  console.log('Listening on port', app.get('port'));
});

//routes

//default index catch
app.get('/', function (req, res) {
  res.sendFile('./client/index.html');
});
