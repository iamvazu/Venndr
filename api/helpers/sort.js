const compare = (a, b) => {
   return b.matches - a.matches;
}

const merge = jobData => {
    console.time('sort');

    // sort by keyword matches and return
    jobData.sort(compare);
    console.timeEnd('sort')
    return jobData;
}

module.exports = merge;