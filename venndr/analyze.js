const arrayify = require('../venndr/arrayify');

// This function will iterate through all the job descriptions for each from the api,
// and then talley the matches between the resume text and the job description text
module.exports = (resDescArr, jobsObj, holyArray, callback) => {
    var words = [];
    // iterate through properties in jobsObjs 
    for (var currentJob in jobsObj) {
        if (jobsObj.hasOwnProperty(currentJob)) {

            // get array from description and iterate through words
            let currentJobDesc = arrayify(jobsObj[currentJob].description);
            let counter = 0;

            // iterate through the job description words
            for (let descIndex = 0, descLen = currentJobDesc.length; descIndex <= descLen; descIndex++) {
                
                // iterate through resume words
                for (let resIndex = 0, resLen = resDescArr.length; resIndex <= resLen; resIndex++) {
                    let descKeyWord = currentJobDesc[descIndex];
                    let resKeyWord = resDescArr[resIndex];
                    if (String(descKeyWord).includes(resKeyWord)) {
                        // bump the counter if theres a match
                        //TODO: write function to filter our prepositions like 'as' 'the' 'to'
                        counter++;
                        words.push(resKeyWord);
                    }
                }
            }
            // check if object already exists in the array 
            if (!holyArray.includes(jobsObj[currentJob])) {
                // add this obj to the holy array
                holyArray.push(jobsObj[currentJob]);
                jobsObj[currentJob]['occurences'] = counter;
                //console.log(jobsObj[currentJob]['occurences']);
            }
        }
    }
   // console.log(words);
    // sort the array by highest occurences to lowest
    holyArray.sort(function (a, b) {
        return b.occurences - a.occurences;
    });
    // return to waterfall
    callback(null, holyArray);
}