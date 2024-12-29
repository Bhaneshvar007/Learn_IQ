const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
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
    videos: [
        { type: String }
    ],
}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema);