Group = require('../models/Group')


exports.createCommunity = (req, res) => {
    console.log("Request Received!")
    console.log(req.body)
    Group.create({
        name: req.body.name,
        description: req.body.description,
        members: req.body.member_emails.map(email => User.findOne(email)),
        admins: req.body.admin_emails.map(email => User.findOne(email)),
        sponsors: req.body.sponsor_emails.map(email => User.findOne(email))
    }, (err, group) => {
        if (err) {
            return res.status(500).send("Community Creation Failure - Internal Server Error");
        }

        res.status(200).send(group)
    })

}