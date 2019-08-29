const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    date: {
        type: String,
        default: Date.now
    }
});

const User =  mongoose.model('User', UserSchema);
module.exports = User;