const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const  campaignSchema = new mongoose.Schema({
    
    categories:{
        type:String
    },
        title: {
            type: String
        },
        created_by:{
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        description: {
            type: String
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        campaign_location: {
            latitude: {
                type: String
            },
            longitude: {
                type: String
            }
        },
        country_code: {
            type: String
        },
        num_of_volunteers: {
            type: Number
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
    
    }, { collection: 'Campaigns' });


 const Campaign = mongoose.model('Campaign', campaignSchema);
 module.exports = Campaign