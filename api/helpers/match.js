const async = require('async');

// iterats thru every words in resume
// checks if the current word is present
// in the job description
const search = (resArr, jobArr) => {
    let matches = 0;
    resArr.map(cur => {
        if (jobArr.indexOf(cur) !== -1) matches++;
    });
    return matches;
}

const match = (stats, success, failure) => {
    console.time('otherMatch');
    let { jobData } = stats;
    let { resArr } = stats;

    async.each(jobData,
        (curSite, cb) => {
            let { jobs } = curSite;
            jobs.map(cur => {
                cur.matches = search(resArr, cur.keywords);
            });
            cb();
        },
        (err) => {
            if (err) failure(err);
            console.timeEnd('otherMatch')
            success(stats);
        });
}
module.exports = match;