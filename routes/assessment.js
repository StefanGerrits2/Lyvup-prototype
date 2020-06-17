// Render assessment page
function assessment(req, res) {
    res.render('assessment.hbs', {
        assessment: true
    });
}

module.exports = assessment;