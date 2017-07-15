// dependencies
const async = require('async');
var busboy = require('connect-busboy');
var fs = require('fs');


// venndr functions
const scandoc = require('./venndr/scandoc');
const getJobs = require('./venndr/getjobs');
const cascade = require('./venndr/cascadejobs');

module.exports = function (app) {

    // server routes ==========================================================================================================

    app.post('/api/worker', function (req, res) {
        //let response = worker.AnalyzeGithubJobs();
        console.log(req.query.resDesc);
        //scandoc(req.query);
        async.parallel({

            GithubJobs: (callback) => {
                getJobs('https://jobs.github.com/positions.json', callback);
            },
            Glassdoor: function (callback) {
                setTimeout(function () {
                    callback(null, 2);
                }, 100);
            }
        }, function (err, results) {
            if (err) console.log(err);
            // this is where the list is stored
            cascade(req.query.resDesc, results, function (err, data) {
                if (err) {
                    console.log('what the heck');
                    console.log(err);
                }
                res.send({ result: data })
            });
        });
    });

    app.post('/api/upload', function (req, res) {

        // read in the req
        var fstream;
        req.pipe(req.busboy);
        req.busboy.on('file', function (fieldname, file, filename) { // download the file
            console.log("Uploading: " + filename);

            fstream = fs.createWriteStream(__dirname + '/resumes/' + filename);
            file.pipe(fstream);
            fstream.on('close', function () {
                // scandoc(__dirname + '/resumes/' + filename);
                res.send(filename);
            });
        });
    });

    // frontend routes ==========================================================================================================

    // catch all route to send user to index
    app.get('*', function (req, res) {
        res.sendfile('./frontend/index.html'); // loads the index.html file
    });

};
