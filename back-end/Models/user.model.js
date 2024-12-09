const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    username: {
        type: String,

    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin", "instructor"],
        default: "user"
    },
    resetToken: String,
    resetTokenExpiry: Date,
})


const User = mongoose.model('User', userSchema);

module.exports = User;