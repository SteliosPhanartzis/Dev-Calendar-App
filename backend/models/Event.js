const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    datetime_start: {
        type: datetime,
        required: true
    },
    datetime_end: {
        type: datetime,
        required: true
    }
})

const User = mongoose.model('Event', UserSchema);

module.exports = User;