var http = require('http');
var express = require('express');

// Build the app
var app = express();

// Add some middleware
app.use(function(request, response){
  response.writeHead(200, {"Content-Type" : "text/plain"});
  response.end("Hello world!\n");
});

http.createServer(app).listen(1337);
