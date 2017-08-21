// modules
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
//const mongoose = require('mongoose');
const busboy = require('connect-busboy');

// first establish the environment settings
const env = process.env.NODE_ENV;

// get the db url
//const db = require('./config/db');

// get port
const port = process.env.PORT || 9000;

// connect to the db
//mongoose.connect(db.url);

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb', type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
//app.use(fileUpload());
app.use(busboy());
app.use(methodOverride('X-HTTP-Method-Overrride'));


app.use(express.static(`${__dirname}/app/dist`));
app.use('/pdf', express.static(__dirname + '/resumes'));

// apply the routes
const indexPath = `${__dirname}/app/dist/index.html`;
console.log(indexPath);
require('./api/routes')(app, indexPath);

//start app
app.listen(port, () => {
    console.log(`Listening on port ${port}!`); 
});

// expose the express object
exports = module.exports = app;