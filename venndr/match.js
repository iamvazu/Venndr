// dependencies
const async = require('async');

//venndr
const analyze = require('../venndr/analyze');
const arrayify = require('../venndr/arrayify');

module.exports = (resArr, jobPostingsArr, callbackFunction) => {
    async.waterfall([
        function (callback) {
            sync(resArr, jobPostingsArr, callback);
        }
    ],
        callbackFunction // perform callbackFunction after waterfall
    );
}

// concurrently analyzes job description
// keyword matches
function sync(resArr, jobPostingsArr, callback) {

    // first build an array of functions to execute concurrently
    let concurrentFunctionArray = []
    for (var job in jobPostingsArr) {
        concurrentFunctionArray.push(asyncArray(resArr, jobPostingsArr[job]));
    }

    // do concurrent binary search of job descs 
    async.parallel(
        concurrentFunctionArray,
        function (err, results) {
            callback(null, results);
        });
}

// searches for keyword matches
// resArr: array of words from resume
// jobArr: array of words from job description
function binarySearch(resArr, jobArr) {
    let matches = 0;
    for (keyword in resArr) {
        let curResKeyword = resArr[keyword];
        let minIndex = 0;
        let maxIndex = jobArr.length - 1;
        let currentIndex;
        let curJobKeyword;
        while (minIndex <= maxIndex) {
            currentIndex = (minIndex + maxIndex) / 2 | 0;
            curJobKeyword = jobArr[currentIndex];
            if (curJobKeyword.includes(curResKeyword)) {
                matches++;
                break; // match is found
            } else if (curResKeyword < curJobKeyword) {
                maxIndex = currentIndex - 1; // take left side
            } else if (curResKeyword > curJobKeyword) {
                minIndex = currentIndex + 1; // take right side
            }
        }
    }
    return matches;
}
// returns function for async operation
// resArr: array of words from resume
// curJob: oject of the current job in loop
// callback: callback function in async operation
function asyncArray(resArr, curJob) {
    let curJobArr = arrayify(curJob.description);
    return function (callback) {
        let search = binarySearch(resArr, curJobArr);
        // append the matches prop to the object
        curJob.matches = search;
        callback(null, curJob);
    }
}