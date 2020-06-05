function profile (req, res) {
    res.render('profile.hbs', {
        profile: true
    });
}

module.exports = profile;