const async = require('async');
const arrayify = require('./arrayify');
const PDFJS = require('pdfjs-dist');
const Job = require('../db/Job');

class JobSeeker {

    // constructor(resume, jobs) {
    //     // A JobSeeker object is sent as the api response
    //     // it contains two properties: resume and jobs
    //     this.resume = {};
    //     this.jobs = [];

    //     // resume prop contains the resume str, and keywords
    //     this.resume.text = resume;
    //     this.resume.keywords = arrayify(resume);

    //     // array of job objects
    //     this.jobs = jobs;

    //     this.matchJobs();
    // }
    constructor(location, query) {
        this.location = location;
        this.query = query;

        this.resume = {
            text: '',
            keywords: []
        };

        this.jobs = [];
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

    renderPDF(buffer, success) {
        // get the text
        // pdfjs getTextContent() returns an
        // array of objects which contains a
        // property 'str'
        // this will concatenate all the objects
        PDFJS.getDocument(buffer).then(pdf => {
            pdf.getPage(1).then(page => {
                page.getTextContent().then(txt => {
                    let { items } = txt;
                    let concat = items.map(cur => cur.str).join('');
                    this.resume.text = concat;
                    this.resume.keywords = arrayify(concat);
                    success();
                });
            });
        });
    }

    findJobs(success) {
        Job.find({ keywords: this.query }, (err, jobs) => {
            // extract the "_doc" property out of the array
            jobs = jobs.map(cur => cur._doc);
            this.jobs = jobs;
            success();
        });
    }
}

module.exports = JobSeeker;