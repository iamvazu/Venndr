const async = require('async');
const arrayify = require('./helpers/arrayify');
const render = require('./helpers/render-pdf');
const get = require('./helpers/get');
const match = require('./helpers/match');
const sort = require('./helpers/sort');
const JobSeeker = require('./helpers/JobSeeker');

module.exports = function (app, indexPath) {

    app.post('/api/match', (req, res) => {
        let { location } = req.body;
        let { query } = req.body;
        let { resume } = req.files;
        console.time('match')

        // render pdf and get jobs
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

            if (err) res.send('lol wtf');

            match(results,
                data => {

                    // build the final response object
                    data.resume = {
                        keywords: data.resArr,
                        words: data.resArr.length
                    }
                    // sort all the jobs in job data
                    data.sorted = sort(data.jobData);
                    delete data.jobData;
                    console.timeEnd('match')
                    res.send(data);

                },
                err => {
                    res.send('Error while comparing jobs');
                });
        });
    });

    app.post('/api/test', (req, res) => {
        let { location } = req.body;
        let { query } = req.body;
        let { resume } = req.files;
        console.time('match')

        // render pdf and get jobs
        async.parallel({
            resArr: callback => {
                render(resume.data, (str) => {
                    callback(null, str);
                });
            },
            jobData: callback => {
                get(location, query, (data) => {
                    callback(null, data);
                });
            }
        }, (err, results) => {
            if (err) res.send('lol wtf');
            let resp = new JobSeeker(results.resArr, results.jobData);
            resp.matchJobs();
            resp.sortJobsBy('matches');
            res.send(resp);
        });
    });

    app.get('*', function (req, res) {
        res.sendfile(indexPath); // loads the index.html file
        console.log('index.html sent');
    });

};