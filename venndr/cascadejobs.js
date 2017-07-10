// dependencies
const async = require('async');

//venndr
const analyze = require('../venndr/analyze');
const arrayify = require('../venndr/arrayify');

module.exports = (resDescStr, jobSiteObj, cb) => {
    const resDescArr = arrayify(resDescStr);
    let holyArray = [];
    async.waterfall([
        // Github Jobs
        function (callback) {
            analyze(resDescArr, jobSiteObj.GithubJobs, holyArray, callback);
        }
    ],
        cb // perform cb function (routes.js)
    ); 
}