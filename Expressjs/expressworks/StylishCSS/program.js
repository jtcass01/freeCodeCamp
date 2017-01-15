var express = require('express');
var stylus = require('stylus');

var app = express();

app.set('view engine', 'jade');
app.set('views', process.argv[3]);

app.use(express.static(process.argv[3]));
app.use(stylus.middleware(process.argv[3]));

app.get('/home', function(request, response){
  response.render('index');
});

app.listen(process.argv[2]);
