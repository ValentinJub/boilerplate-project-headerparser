// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
//let's use it to test the request parameters
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API'});
});

//the only function we have to write to pass the tests:
app.get("/api/whoami", (req, res) => {
  //the ip is in req.ip methods while the rest of the info we need is in the headers
  let ipRequest = req.ip;
  let browserUsed = req.headers["user-agent"];
  let languageUsed = req.headers["accept-language"];
  res.json({
    ipaddress: ipRequest,
    software: browserUsed,
    language: languageUsed
  })
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
