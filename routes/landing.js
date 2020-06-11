function landing (req, res) {
    res.render('landing.hbs', {
        landing: true
    });
}

module.exports = landing;