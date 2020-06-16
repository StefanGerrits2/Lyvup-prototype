require('dotenv').config();
const Fetcher = require('../modules/fetch.js');
const dateChecker = require('../modules/dateChecker.js');
const dataManager = require('../modules/dataManager.js');

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({
    extended: true
});

function goals(req, res) {
    dataManager(req.body).then(function(result) {
        result.forEach(element => element.daysToExpiry = dateChecker(element.expiry_date));
        res.render('goals.hbs', {
            data: result,
            goals: true
        });

    });
}

module.exports = goals;