var mongoose = require('mongoose');

//define the model
module.exports = mongoose.model('JobSeeker', {
    name: 'string'
});