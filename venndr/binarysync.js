const async = require('async');
const arrayify = require('../venndr/arrayify');

module.exports = function (resArr, jobsObj, callback) {
    console.log('we in boi');

    let concurrents = {}
    for (var currentJob in jobsObj) {
        if (jobsObj.hasOwnProperty(currentJob)) {
            // concurrents.push(function () {
            //     binarySearch('wt heck!!');
            // })
            concurrents[jobsObj[currentJob].company] = function() {console.log('wat boi');  }
        }
    }
    console.log(concurrents);

    //console.log(concurrents[0]);
    callback(null, concurrents);


}

function binarySearch(bigArray) {
    console.log('binary search boi');
    console.log(bigArray);


}