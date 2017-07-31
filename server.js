// modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const busboy = require('connect-busboy');

// first establish the environment settings
const env = {};
if (process.env.NODE_ENV == "PRODUCTION") {
    env.dir = '/dist'
    env.debug = false,
    env.name = 'PRODUCTION'
} else {
    env.dir = '/.tmp'
    env.debug = true,
    env.name = 'DEVELOPMENT'
}

// get the db url
const db = require('./config/db');

// get port
const port = process.env.PORT || 8080;

// connect to the db
mongoose.connect(db.url);

//parse body of all incoming requests 
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(busboy());
app.use(methodOverride('X-HTTP-Method-Overrride'));


app.use(express.static(__dirname + env.dir));
app.use('/pdf', express.static(__dirname + '/resumes'));

// apply the routes
require('./routes')(app, env.dir);

//start app
app.listen(port);

console.log('PORT: ' + port);
console.log('ENV: ' + env.name);
console.log('SRC: ' + env.dir);

// turn off my console.logs if in prod
if (!env.debug) console.log = function () {};

// expose the express object
exports = module.exports = app;