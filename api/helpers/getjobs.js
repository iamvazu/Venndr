const request = require('request');
const async = require('async');

const arrayify = require('../helpers/arrayify');

// This function simply uses the request module to call a job api
// url param is the url of the api
// callback param is the callback in the async.parallel in the routes.js
module.exports = async (url, resArr, callback) => {
    // call api
    request({ url: url, forever: true }, function (err, response, body) {

        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        // do the keyword compare
        let res = await match(resArr, JSON.parse(body));
        return res;
    });
}

// this function iterates through all the jobs in the array
// and uses the search function to figure the amount
// of keyword matches there are.
// then returns the same array with each object now containing a property
// denoting the number of matches 
function match(resArr, jobPostingsArr, callbackFunction) {

    const compareKeywords = (curJob, callback) => {
        // first get the keywords of the curJob in an array
        let curJobArr = arrayify(curJob.description);

        // search returns an integer denoting the number of matches
        let matches = search(resArr, curJobArr);

        // append the integer to the curJob object and callback
        curJob.matches = matches;
        callback();
    }

    const handleErr = (err) => {
        if (err) return console.log("UH OH");
    }


    async.each(jobPostingsArr, compareKeywords, handleErr);
    return jobPostingsArr;
}

// searches for keyword matches
// resArr: array of words from resume
// jobArr: array of words from job description
function search(resArr, jobArr) {
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