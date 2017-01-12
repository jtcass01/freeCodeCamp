var http = require('http');
var express = require('express');
var logger = require('morgan');

// Build the app
var app = express();

//Logging middleware
app.use(logger());
  //Fun Fact: logger() returns a function.
  
// Add some middleware
app.use(function(request, response){
  response.writeHead(200, {"Content-Type" : "text/plain"});
  response.end("Hello world!\n");
});

http.createServer(app).listen(1337);
