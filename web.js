var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

// Assignment hints at using fs.readFileSync and buffers.
// Use 'utf8' encoding to treat as string to make things simpler.

var text = fs.readFileSync('index.html','utf8');

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
