// modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
var busboy = require('connect-busboy');

//config 
const db = require('./config/db');

//port
const port = process.env.PORT || 8080;

//connect db
mongoose.connect(db.url);

//parse body of all incomoing requests 
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(busboy());
app.use(methodOverride('X-HTTP-Method-Overrride'));


//set the frontend files location
app.use(express.static(__dirname + '/frontend'));
app.use('/pdf', express.static(__dirname + '/resumes'));


//apply the routes
require('./routes')(app);

//start app
app.listen(port);

console.log('Listening on port ' + port);

// expose app
exports = module.exports = app;