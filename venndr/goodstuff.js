// the purpose of this file is to store global functions that may be useful throughout different areas of the api

module.exports = {
    Analyze: Analyze,
    Cut: Cut,
}

function Analyze(resDesc, jobDesc) {
    console.log('Found ' + results.length + ' GithubJobs.');
    let firstDesc = results[0].description.toLowerCase();
    let words = firstDesc.split(" ");
    let counter = 0;
    var matches = {};
    for (let a = 0; a < resume.length; a++) {
        matches[resume[a]] = 0;
    }
    console.log(matches);
    console.log(results[0].company);
    for (let r = 0; r < resume.length; r++) {
        for (let i = 0; i < words.length; i++) {
            if (words[i].includes(resume[r].toLowerCase())) {
                counter++;
            }
        }
    }
    console.log(counter);
    console.log(matches);
}

function Cut(bigString) {

}
