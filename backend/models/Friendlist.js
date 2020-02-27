const mongoose = require('mongoose');

const FriendlistSchema = new mongoose.Schema({
    UID1: {
        type: String,
        required: true
    },
    UID2: {
        type: String,
        required: true
    }
})

const User = mongoose.model('Friendlist', UserSchema);

module.exports = User;