const Job = require('./Job.js');

/**
 * Queries the db for jobs, sending the 'query' param as an argument
 * then sets the db res to this.jobs
 * 
 * success - callback function for successful completion
 */
const queryJobs = (query, location, success) => {
    Job.find({}, (err, jobs) => {
        // extract the "_doc" property out of the array
        jobs = jobs.map(cur => cur._doc);

        success(jobs);
    });
}

module.exports = queryJobs;