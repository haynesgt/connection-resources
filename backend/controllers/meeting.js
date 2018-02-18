Group = require('../models/Group')
Meeting = require('../models/Meeting')
User = require('../models/User')

exports.createMeeting = (req, res) => {
    console.log("Received!")

    return Promise.all(
        [
            Promise.all(
                req.body.attendee_emails.map(email => User.findOne({ 'email': email }, { '_id': 1 }))
            ),
            Promise.all(
                req.body.sponsor_emails.map(email => User.findOne({ 'email': email }, { '_id': 1 }))
            )
        ]


    ).then(
        (result) => {

            attendees = result[0]

            sponsors = result[1]

        Meeting.create({
            startTime: req.body.startDate,
            endTime: req.body.endDate, 
            site: req.body.site, // Consider using GeoJSON in future
            description: req.body.description,
            name: req.body.name,
            attendees: [attendees.map(x => x._id)],
            sponsors: [sponsors.map(x => x._id)],

        }, (err, meeting) => {

                if (err) {
                    console.log(err)
                    return res.status(500).send("Meeting Creation Failure - Internal Server Error");
                }
                res.status(200).send(meeting)

        })

        }



    )
}

exports.list_meetings = (req, res) => {
    return Promise.all( [Meeting.find({}).sort({datefield: -1})]).then(meetings => res.status(200).send(meetings))
}
