const config = require("../config/db.js");
const get = require("../helpers/get.js");
const Job = require('./Job');

const fill = () => {
    get('', '', data => {
        Job.remove({}, err => {
            if (err) throw err;
            for (let i = 0; i < data.length; i++) {
                let scheme = new Job(data[i]);

                scheme.save(err => {
                    if (err) throw err;

                    console.log('wat');
                });
            }
        });
    });
}


module.exports = fill;