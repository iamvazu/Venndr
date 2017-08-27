const request = require('request');
const arrayify = require('./arrayify');
const async = require('async');

// this function accepts a location and query string
// it returns and array of links to call all of the job
// apis
const getLinks = (location, query) => {
    return {
        GithubJobs: {
            jobs: [],
            link: `https://jobs.github.com/positions.json?description=${query}&location=${location}`
        }
    }
}

// accepts array of objects
// returns array with keywords
// tacked on as the 'arr' property
const addKeys = resp => {
    return resp.map(cur => cur.keywords = arrayify(cur.description));
}

const get = (location, query, callback) => {
    let jobData = getLinks(location, query);

    async.each(jobData,
        (cur, cb) => {
            request({ url: cur.link }, (err, resp, body) => {
                if (err) console.log(err);

                body = JSON.parse(body);
                addKeys(body);

                // add the jobs property to the object
                cur.jobs = body;
                cb();
            });
        }, (err) => {
            if (err) console.log(err);

            callback(jobData);
        });
}

module.exports = get;