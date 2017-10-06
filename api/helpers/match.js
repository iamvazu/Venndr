const async = require('async');

// iterats thru every words in resume
// checks if the current word is present
// in the job description
// accepts array of resume keywords and array of job keywords
// returns array of matching words
const search = (resArr, jobArr) => {
    let commons = [];
    resArr.map(cur => {
        if (jobArr.indexOf(cur) !== -1) {
            commons.push(cur);
        }
    });
    return commons;
}

const match = (stats, success, failure) => {
    console.time('otherMatch');
    let { jobData } = stats;
    let { resArr } = stats;

    async.each(jobData,
        (cur, cb) => {
            //let { jobs } = curSite;
            cur.commons = search(resArr, cur.keywords);
            cur.matches = cur.commons.length;
            cb();
        },
        (err) => {
            if (err) failure(err);
            console.timeEnd('otherMatch')
            success(stats);
        });
}
module.exports = match;