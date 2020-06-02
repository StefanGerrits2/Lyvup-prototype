require('dotenv').config();
const Fetcher = require('../modules/fetch.js');
const dateChecker = require('../modules/dateChecker.js')

let dateCheckedGoals = []

async function goals(req, res) {

  try {
    const baseURL = 'https://lyvup.com/api/';
    const query = `getUserGoals/2/?token=${process.env.TOKEN}&lang=dutch`;
    const goalsURL = baseURL.concat(query);

    // Get user goals
    let userGoals = await Fetcher.get(goalsURL);
    userGoals = userGoals.getUserGoals.data

    userGoals.forEach(element => element.daysToExpiry = dateChecker(element.expiry_date));

    console.log(userGoals)

    res.render('goals.hbs', {
      data: userGoals
    });
  } catch (error) {
    res.render('goals.hbs', {
      // Data
    });
    console.log(error);
  }
}

module.exports = goals;