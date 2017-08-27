const compare = (a, b) => {
   return b.matches - a.matches;
}

const merge = (jobData) => {
    console.time('sort');
    let parent = [];

    // merge all the job objects into the empty array
    for (site in jobData) {
        if (jobData.hasOwnProperty(site)) {
            let jobArr = jobData[site].jobs;
            // merge job array to parent array
            parent.push.apply(parent, jobArr);
        }
    }
    // sort by keyword matches and return
    parent.sort(compare);
    console.timeEnd('sort')
    return parent;
}

module.exports = merge;