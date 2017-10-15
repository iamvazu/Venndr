// modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const busboyBodyParser = require('busboy-body-parser');

const db = process.env.DB_URL || require('./api/config/db');

const port = process.env.PORT || 9000;

// connect to the db
mongoose.createConnection(db);

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(busboyBodyParser());
app.use(methodOverride('X-HTTP-Method-Overrride'));

app.use(express.static(`./app/dist/`));
app.use(express.static('./img'));
app.get('/for/dylan/my/sweetheart', (req, res) => {
    res.sendfile('./img/dylan.html');        
});
const indexPath = `./app/dist/index.html`;
require('./api/routes')(app, indexPath);

app.listen(port, () => {
    console.log(`Listening on port ${port}!`); 
});

exports = module.exports = app;