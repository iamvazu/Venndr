const async = require('async');
const renderPDF = require('./helpers/render-pdf');
const JobSeeker = require('./helpers/JobSeeker');
const Job = require('./db/Job');

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

            callback => user.findJobs(callback)
        ],
            err => {
                if (err) res.send('YIKES');
                user.matchJobs();
                user.sortJobsBy('matches');
                res.send(user);
            }
        );
    });

    app.get('*', function (req, res) {
        res.sendfile(indexPath)
    });
};

