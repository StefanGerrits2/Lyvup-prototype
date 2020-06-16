function leaderboard_new (req, res) {
    res.render('leaderboard-new.hbs', {
        leaderboard: true
    });
}

module.exports = leaderboard_new;