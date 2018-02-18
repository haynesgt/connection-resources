Group = require('../models/Group')
User = require('../models/User')


exports.createCommunity = (req, res) => {
    console.log("Request Received!")
    console.log(req.body)
    return Promise.all(
        [
            Promise.all(
                req.body.member_emails.map(email => User.findOne({ 'email': email }, { '_id': 1 }))
            ),
            Promise.all(
                req.body.admin_emails.map(email => User.findOne({ 'email': email }, { '_id': 1 }))
            ),
            Promise.all(
                req.body.sponsor_emails.map(email => User.findOne({ 'email': email }, { '_id': 1 }))
            )
        ]
    ).then(
        (result) => {
            console.log(result)
            let members = result[0];
            let admins = result[1];
            let sponsors = result[2];
            Group.create({
                name: req.body.name,
                description: req.body.description,
                members: members ? members.map(x => x._id) : [],
                admins: admins.map(x => x._id),
                sponsors: sponsors.map(x => x._id)
            } , (err, group) => {
                        if (err) {
                            console.log(err)
                            return res.status(500).send("Community Creation Failure - Internal Server Error");
                        }
                        res.status(200).send(group)

                    }
                );
            }
            )
}

exports.list_communities = (req, res) => {
    return Promise.all( [Group.find({})]).then(group => res.status(200).send(group))
}