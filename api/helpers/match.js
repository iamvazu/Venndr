const async = require('async');

const search = (resArr, jobArr) => {
    let matches = 0;
    resArr.map(cur => {
        if (jobArr.indexOf(cur) !== -1) matches++;
    });
    return matches;
}

const match = (stats, callback) => {
    let { jobData } = stats;
    let { resArr } = stats;

    async.each(jobData.GithubJobs.jobs,
        (cur, cb) => {
            let matches = search(resArr, cur.keywords);
            cur.matches = matches;
            cb();
        }, (err) => {
            if (err) console.log(err);

            callback(stats);
        })
}

module.exports = match;