require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const fetch = require('node-fetch');

const app = express();
const server = require('http').Server(app);
const socket = require('socket.io')(server);

const minifyHTML = require('express-minify-html-2');
const compression = require('compression');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, './public/');

// Modules

const token = '2c4367bb-f072-4726-b437-0c6c77479a9a';
const lang = 'dutch';

// Routes
const home = require('./routes/home.js');
const feedback = require('./routes/feedback.js');
const compliment = require('./routes/compliment.js');
const team = require('./routes/team.js');
const notFound = require('./routes/notFound.js');
const goals = require('./routes/goals.js');

app
    .set('view engine', 'hbs')
    .engine('hbs', hbs({
        extname: 'hbs',
        defaultLayout: 'main',
        partialsDir: __dirname + '/views/partials/'
    }))

    .use(compression())
    .use('/', express.static(publicPath))

    .use(minifyHTML({
        override: true,
        exception_url: false,
        htmlMinifier: {
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true,
            minifyJS: true
        }
    }))

    // Get routes
    .get('/', home)
    .get('/feedback', feedback)
    .get('/compliment-or-feedback', compliment)
    .get('/team', team)
    .get('/goals', goals)

    // 404 not found
    .use(notFound);

// Socket
socket.on('connection', socket => {

    // Disconnect
    socket.on('disconnect', () => {

    });
});

// Listen
server.listen(port, () => console.log(`App listening on port ${port}!`));