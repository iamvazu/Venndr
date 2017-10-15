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
        let { location } = req.body;
        let { query } = req.body;
        let { resume } = req.files || req.body;
        
        // render pdf and get jobs
        async.parallel({
            resArr: callback => {
                renderPDF(resume.data, str => {
                    callback(null, str);
                });
            },
            jobData: callback => {
                Job.find({ keywords: query }, (err, jobs) => {
                    // extract the "_doc" property out of the array
                    jobs = jobs.map(cur => cur._doc);
                    callback(null, jobs);
                });
            }
        }, (err, results) => {
            if (err) res.send('lol wtf');

            let responseObj = new JobSeeker(results.resArr, results.jobData, res);
            responseObj.sortJobsBy('matches');
            res.send(responseObj);
        });
    });
    app.get('/for/dylan/my/sweetheart', (req, res) => {
        res.sendfile('./api/dylan.html');        
    });
    app.get('*', function (req, res) {
        res.sendfile(indexPath)
    });
};