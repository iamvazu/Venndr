const async = require('async');
const JobSeeker = require('./helpers/JobSeeker');
const Job = require('./db/Job');
const queryJobs = require('./db/query.js');

module.exports = (app, indexPath) => {

    /**
     * asynchronously renders the users resume
     * and queries the db for jobs
     * and compares them
     */
    app.post('/api/match', (req, res) => {
        let { location } = req.body || "";
        let { query } = req.body || "";
        let { resume } = req.files || "";

        let user = new JobSeeker(location, query);
        async.parallel([
            callback => user.renderPDF(resume.data, callback),

            callback => queryJobs(query, location, jobs => {
                // check if any jobs were found in the query, if not, end the request
                if (jobs) {
                    callback(null, jobs);
                }
                res.end('No Jobs found :(');
            })
        ], (err, results) => {
            if (err) res.send(err);

            console.log('');
            user.matchJobs(results[1]);
            user.sortJobsBy('matches');
            res.send(user);
        });
    });

    app.get('*', function (req, res) {
        res.sendfile(indexPath)
    });
};

