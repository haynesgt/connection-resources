const mongoose = require('mongoose')

const meetingSchema = new Mongoose.Schema({

    startTime: Date,
    endTime: Date, 
    site: String, // Consider using GeoJSON in future
    description: String,
    attendees: [{type: Schema.Types.ObjectId, ref: 'User'}],
    sponsor: [{type: Schema.Types.ObjectId, ref: 'User'}],

})