const async = require('async');
const getJobs = require('./helpers/getjobs');
const arrayify = require('./helpers/arrayify');
const render = require('./helpers/render-pdf');
const PDFJS = require('pdfjs-dist');
const get = require('./helpers/get');
const match = require('./helpers/match');

module.exports = function (app, indexPath) {

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

    app.post('/api/match', (req, res) => {
        let { location } = req.body;
        let { query } = req.body;
        let { resume } = req.files;

        async.parallel({
            resArr: callback => {
                render(resume.data, (str) => {
                    str = arrayify(str);
                    callback(null, str);
                });
            },
            jobData: callback => {
                get(location, query, (data) => {
                    callback(null, data);
                });
            }
        }, (err, results) => {
            if (err) console.log(err);

            match(results, (data) => {
                res.send(data);
            });
        });
    });
    // catch all route to send user to index
    app.get('*', function (req, res) {
        res.sendfile(indexPath); // loads the index.html file
        console.log('index.html sent');
    });

};