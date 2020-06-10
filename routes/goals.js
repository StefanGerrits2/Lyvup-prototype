require('dotenv').config();
const Fetcher = require('../modules/fetch.js');
const dateChecker = require('../modules/dateChecker.js');

let userGoals = {};
let persistedData = [];
let fakeId = 29;

async function goals(req, res) {

    if (persistedData.length === 0) {
        try {
            const baseURL = 'https://lyvup.com/api/';
            const query = `getUserGoals/2/?token=${process.env.TOKEN}&lang=dutch`;
            const goalsURL = baseURL.concat(query);

            // Get user goals
            userGoals = await Fetcher.get(goalsURL);
            userGoals = userGoals.getUserGoals.data;

            // retrieves the description from an array within the object
            userGoals.forEach(element => element.description = element.skills[0].description);
            userGoals.forEach(element => element.daysToExpiry = dateChecker(element.expiry_date));

            // console.log(retrievedData)
            persistedData.push(userGoals);
            console.log(userGoals);

            res.render('goals.hbs', {
                data: userGoals,
                goals: true
            });

        } catch (error) {
            res.render('goals.hbs', {
                goals: true
            });
            console.log(error);
        }
    // checks if there is any data received from the form using a POST method
    } else if (req.body != undefined) {
        const newData = {};
        newData.id = fakeId;
        newData.title = req.body.competentie;
        newData.goal_type = req.body.doel;
        newData.expiry_date = req.body.deadline;
        newData.description = req.body.toelichting;
        newData.daysToExpiry = dateChecker(newData.expiry_date);
        userGoals.unshift(newData);
        console.log(userGoals);
        fakeId++;
        res.render('goals.hbs', {
            data: userGoals,
            goals: true
        });
    // if the page is requested and data is already persisted
    } else {
        res.render('goals.hbs', {
            data: userGoals,
            goals: true
        });
    }
}

module.exports = goals;