const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    level: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        required: true
    },
    language: {
        type: String,
        required: true
    },

    reason: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
    },
    videos: [
        { type: String }
    ],
    resources: [
        { type: String }
    ],
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);