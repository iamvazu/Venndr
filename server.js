const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const busboyBodyParser = require('busboy-body-parser');
const cors = require('cors')

// db url is an env variable on heroku, but on local is stored in ./api/config/db
const db = process.env.DB_URL || require('./api/config/db');
mongoose.createConnection(db);

const port = process.env.PORT || 9000;

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(busboyBodyParser());
app.use(methodOverride('X-HTTP-Method-Overrride'));
app.use(cors());
app.use(express.static(`app`));

const indexPath = `./app/index.html`;
require('./api/routes')(app, indexPath);

app.listen(port, () => {
    console.log(`Listening on port ${port}!`); 
});

exports = module.exports = app;