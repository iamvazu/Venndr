// modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

//config 
var db = require('./config/db');

//port
var port = process.env.PORT || 8080;

//connect db
mongoose.connect(db.url);

//parse call
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('X-HTTP-Method-Overrride'));
//set the static files location
app.use(express.static(__dirname + '/frontend'));

//route
require('./routes')(app);

//start app
app.listen(port);

console.log('Listening on port ' + port);

// expose app
exports = module.exports = app;