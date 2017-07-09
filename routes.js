//functions
const worker = require('./venndr/worker');

module.exports = function (app) {

    // server routes ==========================================================================================================

    app.get('/api/jobseekers', function (req, res) {
        worker.AnalyzeGithubGithubJobs();
    });

    // frontend routes ==========================================================================================================


    // catch all route to send user to index
    app.get('*', function (req, res) {
        res.sendfile('./frontend/index.html'); // loads the index.html file
    });

};