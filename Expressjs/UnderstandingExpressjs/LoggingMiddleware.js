var http = require('http');
var express = require('express');

// Build the app
var app = express();

//Logging middleware
app.use(function(request,response,next){
  console.log("In comes a " + request.method + " to " + request.url);
  next();
});

// Add some middleware
app.use(function(request, response){
  response.writeHead(200, {"Content-Type" : "text/plain"});
  response.end("Hello world!\n");
});

http.createServer(app).listen(1337);
