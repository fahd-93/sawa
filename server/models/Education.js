const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({

    title: {
        type: String
    },
    description: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    campaign_location: {
        type: String
    },
    country_code: {
        type: Number
    },
    subject: {
        type: String
    },
    num_of_volunteers: {
        type: Number
    },
    type_of_volunteers: {
        type: String
    },
    materials: {
        type: String
    },
    start_date: {
        type: Date
    },
    end_date: {
        type: Date
    },
    image: {},
    video: {},
})

module.exports = educationSchema