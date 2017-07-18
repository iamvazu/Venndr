// dependencies
const async = require('async');

//venndr
 const analyze = require('../venndr/analyze');
const arrayify = require('../venndr/arrayify');

module.exports = (resArr, jobSiteObj, callbackFunction) => {
    console.log('in cascade');
    
    let holyArray = [];
    async.waterfall([
        // Github Jobs
        function (callback) {
            analyze(resArr, jobSiteObj.GithubJobs, holyArray, callback);
        }
    ],
        callbackFunction // perform callbackFunction (routes.js)
    ); 
}

function sync(resArr, jobsObj, callback) {
    console.log('we in boi');
    console.log(arrayify);

   // let concurrents = asyncArray(jobsObj);
    
    // for (var currentJob in jobsObj) {
    //     if (jobsObj.hasOwnProperty(currentJob)) {
    //         // concurrents.push(function () {
    //         //     binarySearch('wt heck!!');
    //         // })
    //         //concurrents[jobsObj[currentJob].company] = function() {console.log('wat boi');  }
    //     }
    // }
    //console.log(concurrents);

    //console.log(concurrents[0]);
    let jobArr = arrayify(jobsObj[0].description);
    let concurrents = binarySearch(resArr, jobArr);
    // async.parallel([
    //     function (callback) {
    //         binarySearch(resArr, jobsObj[0].description);
    //         callback(null, 'one');
    //     },
    //     function(callback) {
    //         callback(null, 'two');
    //     }
    // ], function(err, result) {
    //     console.log(result);
        
    // })
    callback(null, concurrents);
}

function binarySearch(resArr, jobArr) {
    console.log('binary search boi');

    let matches = 0;
    
    // iterate thru each word in resume
    for (keyword in resArr) {
        let curResKeyword = resArr[keyword];
        let minIndex = 0;
        let maxIndex = jobArr.length - 1;
        let currentIndex;
        let curJobKeyword;
        console.log(curResKeyword);
        
        // loop thru each word job desc
        while(minIndex <= maxIndex) {
            console.log('we searching boi');
            
            // currentIndex = middle of job desc. array
            currentIndex = (minIndex + maxIndex) / 2 | 0;
            curJobKeyword = jobArr[currentIndex];

            // look for a match
            // 
            if (curJobKeyword.includes(curResKeyword)) {
                // bump the counter if a match is found
                matches++;
                console.log(matches);
                
                // determine is curJobKeyword is lexicogically < curResKeyword
            } else if (curResKeyword < curJobKeyword) {
                
                //reassign the minIndex to second half of the array
                maxIndex = currentIndex - 1;
                

                //check if curJobKeyword is > curResKeyword
            } else if (curResKeyword > curJobKeyword) {

                //reassign the max index to the end of the first half
                minIndex = currentIndex + 1;
                
            } else {
                return 'heck';
            }
        }
        
    }
    //return matches;

}
// returns an array of functions
// for the async parallel binarysearch 
function asyncArray(jobsObj) {
    let funcArr = {};
    for (let currentJob in jobsObj) {
        if (jobsObj.hasOwnProperty(currentJob)) {
            
            funcArr[currentJob] = arrayify(jobsObj[currentJob].description);
            
        }
    }
    return funcArr;
}