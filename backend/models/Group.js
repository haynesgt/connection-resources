const mongoose = require('mongoose')

const meetingSchema = new Mongoose.Schema({
    name: String,
    description: String,
    members: [{type: Schema.Types.ObjectId, ref: 'User'}],
    admins: [{type: Schema.Types.ObjectId, ref: 'User'}],
    sponsors: [{type: Schema.Types.ObjectId, ref: 'User'}],

})