const keyword = require('keyword-extractor');

// this function simply takes a large string
// like a resume or job description, and
// uses a library to extract the keywords,
// and return a sorted array of the keywords
module.exports = (bigString) => {

    // filter out stopwords 
    return keyword.extract(bigString, {
        language: "english",
        remove_digits: true,
        return_changed_case: true,
        remove_duplicates: false
    }).sort();

    // return extract.sort();
}