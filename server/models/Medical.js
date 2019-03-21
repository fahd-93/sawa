const mongoose = require('mongoose');

const medicalSchema = new mongoose.Schema({

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
}, { collection: 'Campaigns'});

module.exports = medicalSchema;