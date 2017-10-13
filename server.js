// modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
//const mongoose = require('mongoose');
const busboyBodyParser = require('busboy-body-parser');

const env = process.env.NODE_ENV;

// get the db url
//const db = require('./config/db');

const port = process.env.PORT || 9000;

// connect to the db
//mongoose.connect(db.url);

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(busboyBodyParser());
app.use(methodOverride('X-HTTP-Method-Overrride'));

app.use(express.static(`${__dirname}/app/dist`));

const indexPath = `${__dirname}/app/dist/index.html`;
require('./api/routes')(app, indexPath);

app.listen(port, () => {
    console.log(`Listening on port ${port}!`); 
});

exports = module.exports = app;