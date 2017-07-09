
const GithubJobs = require('github-jobs');

module.exports = {
    AnalyzeGithubGithubJobs: AnalyzeGithubGithubJobs,
}

function AnalyzeGithubGithubJobs(resDescFromClient) {
    GithubJobs.find({}, function (err, results) {
        // handle err
        if (err) { return console.log('Error: ', err); }
        res.json(results);
        let resume = 'Java Javascript Jquery Git Github Swift Python SQL Version Control React Angular Js'
        analyze(resume, results[0].description);
    });
}