function onboarding_post(req, res) {
    data = req.body;
    res.redirect('/get-started')
}

module.exports = onboarding_post;