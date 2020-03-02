const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    title: {
        type: int,
        required: true
    },
    visibility: {
        type: int,
        required: true
    },
    createdBy: {
    	type: string,
    	required: true
    }
})

const User = mongoose.model('Schedule', UserSchema);

module.exports = User;