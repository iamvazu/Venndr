// dependencies
const async = require('async');

//venndr
const analyze = require('../venndr/analyze');
const arrayify = require('../venndr/arrayify');
const binarysync = require('../venndr/binarysync');

module.exports = (resArr, jobSiteObj, callbackFunction) => {
    console.log('in cascade');
    
    let holyArray = [];
    async.waterfall([
        // Github Jobs
        function (callback) {
            binarysync(resArr, jobSiteObj.GithubJobs, callback);
        }
    ],
        callbackFunction // perform callbackFunction (routes.js)
    ); 
}