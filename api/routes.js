const async = require('async');
const busboy = require('connect-busboy');
const fs = require('fs');
const fileUpload = require('express-fileupload');
const getJobs = require('./helpers/getjobs');
const arrayify = require('./helpers/arrayify');

const secret = require('./config/secret');

module.exports = function (app, indexPath) {

    // server routes ==========================================================================================================

    app.post('/api/upload', function (req, res) {
        console.log('upload request');
        var fstream;
        req.pipe(req.busboy);
        req.busboy.on('file', function (fieldname, file, filename) {
            console.log("Uploading: " + filename);

            //Path where image will be uploaded
            fstream = fs.createWriteStream(__dirname + '/resumes/' + filename);
            file.pipe(fstream);
            fstream.on('close', function () {
                console.log("Upload Finished of " + filename);
                //res.redirect('back');           //where to go next
            });
        });
    });

    app.get('/api/test', function (req, res) {
        // get keyword array of the resume
        let resArr = arrayify(req.query.resDesc);
        console.log(req.query.resDesc);
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
        res.sendfile(indexPath); // loads the index.html file
        console.log('index.html sent');
    });

};
