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
    const goalsToCheck = result.setGoals
    goalsToCheck.forEach(element => element.daysToExpiry = dateChecker(element.expiry_date));
    res.render('goals.hbs', {
      setGoals: result.setGoals,
      completedGoals: result.completedGoals,
      goals: true
    });
  });
}

module.exports = goals;