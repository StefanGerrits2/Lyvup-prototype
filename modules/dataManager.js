require('dotenv').config();
const Fetcher = require('../modules/fetch.js');

let userGoalsData = {
    setGoals: [],
    completedGoals: []
};
let persistedData = false;
let fakeId = 29;
let userGoals = '';

const today = new Date();
const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

async function manageData(req) {
    if (persistedData == false && req == undefined) {
        try {
            const baseURL = 'https://lyvup.com/api/';
            const query = `getUserGoals/2/?token=${process.env.TOKEN}&lang=dutch`;
            const goalsURL = baseURL.concat(query);

            // Get user goals
            userGoals = await Fetcher.get(goalsURL);
            userGoals = userGoals.getUserGoals.data;

            // Retrieves the description from an array within the object
            userGoals.forEach(element => element.description = element.skills[0].description);

            // Some data from the api did not translate to dutch
            userGoals.map((curr) => {
                if (curr.goal_type === 'Improve') {
                    curr.goal_type = 'Ontwikkelen';
                } else if (curr.goal_type === 'Apply') {
                    curr.goal_type = 'Toepassen';
                } else {
                    curr.goal_type = 'Toepassen / Ontwikkelen';
                }
            });
            userGoals.forEach(element => userGoalsData.setGoals.push(element));

            persistedData = true;
            return userGoalsData;

        } catch (error) {
            console.log(error);
        }
    // checks if there is any data received from the form using a POST method
    } else if (req != undefined && req.editId === undefined && req.completeId === undefined && req.deleteId === undefined) {
        const newData = {};
        newData.id = fakeId.toString();
        newData.title = req.competentie;
        newData.goal_type = req.doel;
        newData.expiry_date = req.deadline;
        newData.description = req.toelichting;
        userGoalsData.setGoals.unshift(newData);
        fakeId++;
        return userGoalsData;

    // if there is data received from a delete form using a POST but it does not contain an editId
    } else if (req != undefined && req.editId === undefined && req.deleteId === undefined) {
        const completedGoal = userGoalsData.setGoals.filter(function(selected) {
            return selected.id === req.completeId;
        });

        // puts the deleted data into userGoalsData.completedGoals and sets their completion values
        completedGoal[0].complete_date = req.completionDate;
        completedGoal[0].complete_percentage = req.completionRate;
        completedGoal[0].complete_comment = req.completionText;
        userGoalsData.setGoals.splice(userGoalsData.setGoals.findIndex(item => item.id === req.completeId), 1);
        userGoalsData.completedGoals.unshift(completedGoal[0]);

        return userGoalsData;
    // if there is data received from an edit form using a POST method and the data has an id
    } else if (req != undefined && req.deleteId === undefined) {
        userGoalsData.setGoals.map((curr) => {
            if (curr.id == req.editId) {
                if (curr.title != req.competentie) {
                    curr.title = req.competentie;
                }
                if (curr.goal_type != req.doel) {
                    curr.goal_type = req.doel;
                }
                if (curr.description != req.toelichting && req.toelichting != '') {
                    curr.description = req.toelichting;
                }
                curr.expiry_date = req.deadline;
            }
        });
        return userGoalsData;
    // if the page is requested and data is already persisted on the server
    } else if (req != undefined) {
        userGoalsData.completedGoals.splice(userGoalsData.completedGoals.findIndex(item => item.id === req.deleteId), 1);
        return userGoalsData;
    } else {
        return userGoalsData;
    }
}

module.exports = manageData;