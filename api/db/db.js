const config = require("../config/db.js");
const get = require("../helpers/get.js");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    api: String,
    company: String,
    title: String,
    description: String,
    locaton: String,
    how_to_apply: String,
    url: String,
    company_url: String,
    date: String,
    type: String,
    keywords: Array
});
const Job = mongoose.model('Job', jobSchema);
const fill = () => {
    mongoose.connect(config.url);

    get('','',(data) => {
        console.log('wat');
    });
}

module.exports = fill;