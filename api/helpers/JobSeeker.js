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

        const match = () => {
            console.time('otherMatch');

            async.each(this.jobs,
                (cur, cb) => {
                    //let { jobs } = curSite;
                    cur.commons = search(cur.keywords);
                    cur.matches = cur.commons.length;
                    cb();
                },
                (err) => {
                    if (err) console.log("heck");
                    console.timeEnd('otherMatch')
                });
        }

        match();
    }
    /**
     * Sorts the jobs arrray by keyword matches
     */
    sortJobsBy(prop) {
        // passed in the array.sort call below
        // sorts highest matches to lowest
        const compare = (a, b) => {
            return b[prop] - a[prop];
        }

        // sort this.jobs
        const sort = () => {
            console.time('sort');

            // sort by keyword matches and return
            this.jobs.sort(compare);
            console.timeEnd('sort')
        }

        sort();
    }


}

module.exports = JobSeeker;