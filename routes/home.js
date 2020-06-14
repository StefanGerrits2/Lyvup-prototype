require('dotenv').config();
const Fetcher = require('../modules/fetch.js');

async function home (req, res) {
    // URLS
    const baseURL = 'https://lyvup.com/api/';
    const query = `getUserDashboard/2/?token=${process.env.TOKEN}&lang=dutch`;
    const fullURL = baseURL.concat(query);

    // Get clicked beer
    // const userDashboard = await Fetcher.get(fullURL);
    // console.log(userDashboard.getUserDashboard.data);

    res.render('home.hbs', {
        // data: userDashboard.getUserDashboard.data,
        home: true
    });
}

module.exports = home;