// modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
//const mongoose = require('mongoose');
const busboyBodyParser = require('busboy-body-parser');

// first establish the environment settings
const env = process.env.NODE_ENV;

// get the db url
//const db = require('./config/db');

const port = process.env.PORT || 9000;

// connect to the db
//mongoose.connect(db.url);

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb', type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(busboyBodyParser());
app.use(methodOverride('X-HTTP-Method-Overrride'));

app.use(express.static(`${__dirname}/app/dist`));

const indexPath = `${__dirname}/app/dist/index.html`;
console.log(indexPath);
require('./api/routes')(app, indexPath);

app.listen(port, () => {
    console.log(`Listening on port ${port}!`); 
});

const db = require("./api/db/db.js");
db();
exports = module.exports = app;