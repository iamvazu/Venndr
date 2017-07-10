const request = require('request');

// This function simply uses the request module to call a job api
// url param is the url of the api
// callback param is the callback in the async.parallel in the routes.js
module.exports = (url, callback) => {
    // call api
    request(url, function (err, response, body) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        // finish the callback w the results from the api
        callback(false, JSON.parse(body));
    });
}