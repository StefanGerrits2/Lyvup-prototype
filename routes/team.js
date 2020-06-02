require('dotenv').config();
const Fetcher = require('../modules/fetch.js');

// Render home page
async function compliment(req, res) {

    try {
        // URLS
        const baseURL = 'https://lyvup.com/api/';
        const query = `getTeamsOfUser/2/?token=${process.env.TOKEN}&lang=dutch`;
        const teamsURL = baseURL.concat(query);

        // Get all teams
        let userTeams = await Fetcher.get(teamsURL);
        userTeams = userTeams.getTeamsOfUser.data;
        console.log(userTeams);

        res.render('team.hbs', {
            data: userTeams
        });
    } catch (error) {
        res.render('team.hbs', {
            //
        });

        console.log(error);
    }
}

module.exports = compliment;