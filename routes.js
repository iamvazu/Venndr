// grab the jobseeker model
const JobSeeker = ('./models/jobseeker');

//git 
const jobs = require('github-jobs');

//functions

module.exports = function (app) {

    // server routes ==========================================================================================================

    app.get('/api/jobseekers', function (req, res) {
        //var counter = require('./functions/counter.js')(app, 'job desc');
        jobs.find({}, function (err, results) {
            // handle err
            if (err) { return console.log('Error: ', err); }
            res.json(results);
            console.log('Found ' + results.length + ' jobs.');
            let resume = ['Java', 'Javascript(jQuery)','HTML5','CSS3','C#','Python','SQL','North Central Texas Academy', 'Github'];          
            let firstDesc = results[0].description.toLowerCase();
            let words = firstDesc.split(" ");
            let counter = 0;
            let matches = {}; 
            for (let a = 0; a < resume.length; a++) {
                    matches[resume[a]] = 0;
                }
            console.log(matches);
            console.log(results[0].company);
            for (let r = 0; r < resume.length; r++) {
                for (let i = 0; i < words.length; i++) {
                    if (words[i].includes(resume[r].toLowerCase())) {
                        counter++;
                        matches(resume[r])++;
                    }
                }
            }
            console.log(counter);
            console.log(matches);
        });
    });

    // frontend routes ==========================================================================================================


    // catch all route to send user to index
    app.get('*', function (req, res) {
        res.sendfile('./frontend/index.html'); // loads the index.html file
    });

};