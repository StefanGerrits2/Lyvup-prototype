// Render assessment page
function invite(req, res) {
    res.render('invite.hbs', {
        invite: true
    });
}

module.exports = invite;