const request = require('request');
const match = require('../venndr/match');

// This function simply uses the request module to call a job api
// url param is the url of the api
// callback param is the callback in the async.parallel in the routes.js
module.exports = (url, resArr, callback) => {
    // call api
    request(url, function (err, response, body) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        // do the keyword compare
        match(resArr, JSON.parse(body), callback);
    });
}