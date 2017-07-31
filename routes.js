// dependencies
const async = require('async');
//var busboy = require('connect-busboy');
var fs = require('fs');


// venndr functions
const getJobs = require('./venndr/getjobs');
const match = require('./venndr/match');
const arrayify = require('./venndr/arrayify');

const secret = require('./config/secret');

module.exports = function (app, staticDir) {

    // server routes ==========================================================================================================

    app.post('/api/upload', function (req, res) {
        console.log('upload request');
        // read in the req
        var fstream;
        req.pipe(req.busboy);
        req.busboy.on('file', function (fieldname, file, filename) { 
            console.log("Uploading: " + filename);
            fstream = fs.createWriteStream(__dirname + '/resumes/' + filename);
            file.pipe(fstream);
            fstream.on('close', function () {
                res.send(filename);
            });
        });
    });
    
    app.get('/api/test', function (req, res) {
        // get keyword array of the resume
        let resArr = arrayify(req.query.resDesc);
        
        // concurrently make a request to each api 
        // TODO: Add more apis
        async.parallel({
            GithubJobs: function (callback) {
                getJobs(secret.GithubJobs, resArr, callback);
            }

        }, function (err, results) {
            if (err) console.log(err);
            res.send(results);
        });
    });
    // frontend routes ==========================================================================================================

    // catch all route to send user to index
    app.get('*', function (req, res) {
        res.sendfile(__dirname + staticDir + '/index.html'); // loads the index.html file
        console.log('index.html sent');
    });

};
