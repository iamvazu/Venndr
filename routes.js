// dependencies
const async = require('async');

// venndr functions
const getJobs = require('./venndr/getjobs');
const cascade = require('./venndr/cascadejobs');

module.exports = function (app) {

    // server routes ==========================================================================================================

    app.get('/api/worker', function (req, res) {
        //let response = worker.AnalyzeGithubJobs();
        console.log(req.query.resDesc);

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
                res.send({result: data})
            });
        });
    });

    // frontend routes ==========================================================================================================

    // catch all route to send user to index
    app.get('*', function (req, res) {
        res.sendfile('./frontend/index.html'); // loads the index.html file
    });

};
