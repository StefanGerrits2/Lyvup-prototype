require('dotenv').config();
const Fetcher = require('../modules/fetch.js');

// Render home page
async function compliment(req, res) {

    try {
        // URLS
        const baseURL = 'https://lyvup.com/api/';
        const query = `getTeamsOfUser?token=${process.env.TOKEN}&lang=dutch`;
        const teamsURL = baseURL.concat(query);

        // Get all teams
        let userTeams = await Fetcher.get(teamsURL);
        userTeams = userTeams.getTeamsOfUser.data;

        res.render('giveCompliment.hbs', {
            data: userTeams
        });
    } catch (error) {
        res.render('giveCompliment.hbs', {
            //
        });

        console.log(error);
    }
}

module.exports = compliment;