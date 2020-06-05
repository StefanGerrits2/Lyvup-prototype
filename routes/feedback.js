// Render home page
function feedback (req, res) {
    res.render('feedback.hbs', {
        feedback: true
    });
}

module.exports = feedback;