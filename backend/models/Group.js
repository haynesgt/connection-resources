const mongoose = require('mongoose')
const Schema = mongoose.Schema


const meetingSchema = new mongoose.Schema({
    name: String,
    description: String,
    members: [{type: Schema.Types.ObjectId, ref: 'User'}],
    admins: [{type: Schema.Types.ObjectId, ref: 'User'}],
    sponsors: [{type: Schema.Types.ObjectId, ref: 'User'}],

})