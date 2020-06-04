function leaderboard (req, res) {
    res.render('leaderboard.hbs', {
        leaderboard: true
    });
}

module.exports = leaderboard;