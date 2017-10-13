const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../config/db');

mongoose.connect(config.url);

const jobSchema = new Schema({
    api: String,
    company: String,
    title: String,
    description: String,
    location: String,
    how_to_apply: String,
    url: String,
    company_url: String,
    date: String,
    type: String,
    keywords: Array
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;