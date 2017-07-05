// grab the jobseeker model
var JobSeeker = ('./models/jobseeker');

//git 
var jobs = require('github-jobs');

module.exports = function (app) {

    // server routes ==========================================================================================================


    // Return all jobseekrs in the db
    app.get('/api/jobseekers', function (req, res) {
        // // get all jobseekers in the db
        // JobSeeker.find(function(err, jobseekers) {

        //     // send err
        //     if (err) res.send(err);

        //     // send back json
        //     res.json(jobseekers);
        // });
        jobs.find({}, function (err, results) {
            // err
            if (err) {
                return console.log('Error: ', err);
            }
            res.json(results);
            console.log('Found ' + results.length + ' jobs.');
            // iterate thru each job and print
            // results.forEach(function (job) {
            //     jobs.findById(job.id, function (err, result) {
            //         if (err) {
            //             return console.log('Error: ', err);
            //         }
            //         console.log('Job description: ', result);
            //     });
            // });
        });
        console.log('lol what');
        //res.send('ur a bitch');
    });

    // frontend routes ==========================================================================================================


    // catch all route to send user to index
    app.get('*', function (req, res) {
        res.sendfile('./frontend/index.html'); // loads the index.html file
    });

};