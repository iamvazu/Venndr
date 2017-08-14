const request = require('request');
const async = require('async');

const arrayify = require('../helpers/arrayify');

// This function simply uses the request module to call a job api
// url param is the url of the api
// callback param is the callback in the async.parallel in the routes.js
module.exports = (url, resArr, callback) => {
    // call api
    request({url: url, forever: true}, function (err, response, body) {
        
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        // do the keyword compare
        match(resArr, JSON.parse(body), callback);
    });
}

// this function iterates through all the jobs in the array
// and uses the binarysearch function to figure the amount
// of keyword matches there are.
// then returns the same array with each object now containing a property
// denoting the number of matches 
function match(resArr, jobPostingsArr, callbackFunction) {

    async.each(jobPostingsArr, compareKeywords, handleErr);
    callbackFunction(null, jobPostingsArr);

    // gets the keyword matches for currentJob in loop
    // then it appends that integer to the job object
    function compareKeywords (curJob, callback) {
        // first get the keywords of the curJob in an array
        let curJobArr = arrayify(curJob.description);

        // binarySearch returns an integer denoting the number of matches
        let matches = binarySearch(resArr, curJobArr);

        // append the integer to the curJob object and callback
        curJob.matches = matches;
        callback();
    }

    // called if one of the indexes in the async.each 
    // causes an error
    function handleErr (err) {
        if (err) return console.log("UH OH");
    }
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