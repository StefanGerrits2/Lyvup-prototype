require('dotenv').config();
const Fetcher = require('../modules/fetch.js');

// Render home page
async function compliment(req, res) {
    // URLS
    const baseURL = 'https://lyvup.com/api/';
    const query = `getTeamsOfUser/2/?token=${process.env.TOKEN}&lang=dutch`;
    const fullURL = baseURL.concat(query);

    // Get clicked beer
    const userTeams = await Fetcher.get(fullURL);
    console.log(userTeams.getTeamsOfUser.data);

    res.render('giveCompliment.hbs', {
        data: userTeams
    });
}

module.exports = compliment;