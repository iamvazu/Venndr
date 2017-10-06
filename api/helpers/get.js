
const request = require('request');
const arrayify = require('./arrayify');
const async = require('async');
const config = require('../config/secret.js');

class Job {
    constructor(jobsite, initial) {
        this.site = jobsite;
        this.initial = initial;
        this.tree = this.buildObj();
    }
    /**
     * Different apis provide the same info but with slightly
     * different property name
     * buildObj() makes all the name consistent
     */
    buildObj() {
        switch (this.site) {
            case "GithubJobs": {
                return this.formGithubJobs();
            }
            case "AuthenticJobs": {
                return this.formAuthenticJobs();
            }
        }
    }

    formGithubJobs() {
        return {
            api: "GithubJobs",
            company: this.initial.company,
            title: this.initial.title,
            description: this.initial.description,
            location: this.initial.location,
            how_to_apply: this.initial.how_to_apply,
            url: this.initial.url,
            company_url: this.initial.company_url,
            date: this.initial.created_at,
            type: this.initial.type,
            keywords: arrayify(this.initial.description)
        }
    }

    formAuthenticJobs() {

        return {
            api: "AuthenticJobs",
            company: this.initial.company.name,
            title: this.initial.title,
            description: this.initial.description,
            location: this.initial.company.location,
            how_to_apply: this.initial.howto_apply,
            url: this.initial.apply_url,
            company_url: this.initial.company.url,
            date: "",
            type: this.initial.type.name,
            keywords: arrayify(this.initial.description)
        }
    }
}

class JobSite {
    constructor(jobsite) {
        this.jobsite = jobsite;
        this.tunedlist = [];
        //this.setArray(resp);
        //this.tuneListings();
    }

    setTunedList(resp, tune, cb) {
        switch (this.jobsite) {
            case "GithubJobs": {
                this.joblist = resp;
                break;
            }
            case "AuthenticJobs": {
                this.joblist = resp.listings.listing;
                break;
            }
        }

        if (tune) {
            this.tuneListings();
        }

        cb();
    }
    /**
     * This function will ensure all the property names
     * of the response are consistent
     */
    tuneListings() {
        this.joblist.map(cur => {
            let curJob = new Job(this.jobsite, cur);
            this.tunedlist.push(curJob.tree);
        });
    }
}


// this function accepts a location and query string
// it returns and array of links to call all of the job
// apis
const getLinks = (location, query) => {
    return {
        GithubJobs: {
            name: "GithubJobs",
            link: `https://jobs.github.com/positions.json?description=${query}&location=${location}`
        },
        AuthenticJobs: {
            name: "AuthenticJobs",
            link: `https://authenticjobs.com/api/?api_key=${config.AuthenticJobs}&method=aj.jobs.search&format=json&keywords=${query}&location=${location}`
        }
    }
}

// accepts array of objects
// returns array with keywords
// tacked on as the 'arr' property
const addKeywords = resp => {
    return resp.map(cur => cur.keywords = arrayify(cur.description));
}

const get = (location, query, success, failure) => {
    console.time('request');
    let jobData = getLinks(location, query);

    // this array contains all the jobs
    // from all the apis
    let parentJobArray = [];

    // iterate over jobsites and make a request to each api
    async.each(jobData, (cur, cb) => {
        request({ url: cur.link }, (err, resp, body) => {
            // if error happens, just skip the api
            if (!err) {
                body = JSON.parse(body);

                let site = new JobSite(cur.name);
                site.setTunedList(body, true, () => {
                    // merge the joblist into the parent job array
                    parentJobArray.push.apply(parentJobArray, site.tunedlist);
                    cb();
                });
            }
        });
    }, (err) => {
        if (err) failure(err);
        console.timeEnd('request');
        success(parentJobArray);
    });
}

module.exports = get;