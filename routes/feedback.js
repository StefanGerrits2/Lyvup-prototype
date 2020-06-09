require('dotenv').config();
const Fetcher = require('../modules/fetch.js');

// Render home page
async function feedback (req, res) {
    try {
        // URLS
        const baseURL = 'https://lyvup.com/api/';
        const query = `getTeamsOfUser?token=${process.env.TOKEN}&lang=dutch`;
        const teamsURL = baseURL.concat(query);

        // Get all teams
        let userTeams = await Fetcher.get(teamsURL);
        userTeams = userTeams.getTeamsOfUser.data;

        res.render('feedback.hbs', {
            data: userTeams,
            feedback: true
        });

        // // Fetch users
        // // Get all teams
        // let user = await Fetcher.get(`https://lyvup.com/api/getUsersOfTeam?token=${process.env.TOKEN}&lang=dutch`, {
        //     body: '{\n\
        //         "getUsersOfTeam": {\n\
        //           "search_member": "Stefan Gerrits"\n\
        //         }\n\
        //       }'
        // });

        // console.log('stefan log', user);

        console.log(req.body);
    } catch (error) {
        res.render('feedback.hbs', {
            //
        });

        console.log(error);
    }
}

module.exports = feedback;