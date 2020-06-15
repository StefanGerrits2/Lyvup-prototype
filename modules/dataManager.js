require('dotenv').config();
const Fetcher = require('../modules/fetch.js');

let userGoalsData = {
  setGoals: [],
  completedGoals: []
};
let persistedData = [];
let fakeId = 29;
let userGoals = ''

async function manageData(req) {
  if (persistedData.length == 0 && req == undefined) {
    try {
      const baseURL = 'https://lyvup.com/api/';
      const query = `getUserGoals/2/?token=${process.env.TOKEN}&lang=dutch`;
      const goalsURL = baseURL.concat(query);

      // Get user goals
      userGoals = await Fetcher.get(goalsURL);
      userGoals = userGoals.getUserGoals.data;

      // retrieves the description from an array within the object
      userGoals.forEach(element => element.description = element.skills[0].description);
      userGoals.forEach(element => userGoalsData.setGoals.push(element))

      console.log(userGoalsData)
      persistedData.push(userGoals);
      return userGoals

    } catch (error) {
      console.log(error);
    }
    // checks if there is any data received from the form using a POST method
  } else if (req != undefined && req.editId === undefined && req.completeId === undefined) {
    console.log("nieuwe data wordt toegevoegd...")
    const newData = {};
    newData.id = fakeId.toString();
    newData.title = req.competentie;
    newData.goal_type = req.doel;
    newData.expiry_date = req.deadline;
    newData.description = req.toelichting;
    userGoals.unshift(newData);
    console.log(userGoals)
    fakeId++;
    return userGoals
    // if there is data received from a delete form using a POST but it does not contain an editId
  } else if (req != undefined && req.editId === undefined) {
    console.log("data wordt verwijderd...")
    userGoals.splice(userGoals.findIndex(item => item.id === req.completeId), 1)
    console.log(req.voltooid)
    return userGoals
    // if there is data received from an edit form using a POST method and the data has an id
  } else if (req != undefined) {
    console.log("data wordt aangepast...")
    userGoals.map((curr) => {
      if (curr.id == req.editId) {
        if (curr.title != req.competentie) {
          curr.title = req.competentie
        }
        if (curr.goal_type != req.doel) {
          curr.goal_type = req.doel
        }
        if (curr.description != req.toelichting && req.toelichting != "") {
          curr.description = req.toelichting
        }
        curr.expiry_date = req.deadline
      }
    })
    return userGoals
    // if the page is requested and data is already persisted on the server
  } else {

    return userGoals

  }
}

module.exports = manageData;