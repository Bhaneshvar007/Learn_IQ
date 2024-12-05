const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
     },
    email: {
        type: String,
        required: true,
        unique: true,
        uppercase: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin", "instructor"],
        default: "user"
    }
})


const User = mongoose.model('User', userSchema);

module.exports = User;