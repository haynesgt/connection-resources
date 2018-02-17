const body_parser = require("body-parser")



exports.createCommunity = (req, res) => {
    Group.create({
        name: req.body.name,
        description: req.body.description,
        members: req.body.member_emails.map(email => User.findOne(email)),
        admins: req.body.admin_emails.map(email => User.findOne(email)),
        sponsors: req.body.sponsor_emails.map(email => User.findOne(email))
    })

}