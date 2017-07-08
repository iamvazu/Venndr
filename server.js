// modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

//config 
const db = require('./config/db');

//port
const port = process.env.PORT || 8080;

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