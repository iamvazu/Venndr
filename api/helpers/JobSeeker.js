const async = require('async');
const arrayify = require('./arrayify');

class JobSeeker {

    constructor(resume, jobs) {
        // A JobSeeker object is sent as the api response
        // it contains two properties: resume and jobs
        this.resume = {};
        this.jobs = [];

        // resume prop contains the resume str, and keywords
        this.resume.text = resume;
        this.resume.keywords = arrayify(resume);

        // array of job objects
        this.jobs = jobs;

        this.matchJobs();
    }

    /**
     * Compares job keywords with user keywords
     */
    matchJobs() {
        // iterate over job keywords, check for keyword in current job
        const search = (curJobKeywords) => {
            let commons = [];
            this.resume.keywords.map(cur => {
                if (curJobKeywords.indexOf(cur) !== -1) {
                    commons.push(cur);
                }
            });
            return commons;
        }

        // iterate over array of job objects
        async.each(this.jobs, (cur, cb) => {
            cur.commons = search(cur.keywords);
            cur.matches = cur.commons.length;
            cb();
        }, (err) => {
            if (err) console.log("heck");
        });

    }
    /**
     * Sorts the jobs arrray by keyword matches
     */
    sortJobsBy(prop) {
        // sort by keyword matches and return
        this.jobs.sort((a, b) => {
            return b[prop] - a[prop];
        });
    }

}

module.exports = JobSeeker;