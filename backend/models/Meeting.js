const mongoose = require('mongoose')
const Schema = mongoose.Schema

const meetingSchema = new mongoose.Schema({
    startTime: Date,
    endTime: Date, 
    site: String, // Consider using GeoJSON in future
    description: String,
    name: String,
    attendees: [{type: Schema.Types.ObjectId, ref: 'User'}],
    sponsors: [{type: Schema.Types.ObjectId, ref: 'User'}],

})

const Meeting = mongoose.model('Meeting', meetingSchema)

module.exports = Meeting
