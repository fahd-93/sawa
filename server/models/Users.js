const mongoose = require('mongoose');


const  usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name field is required'],
        trim: true
    },

    last_name: {
        type: String,
        trim: true
    },

    date_of_birth: {
        type: String
    },

    gender: {
        type: String
    },

    email: {
        type: String,
        required: true,
        //unique: true,
        //match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    },

    password: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        default: Date.now
    },
    user_location:{
        type :String
    },

    role: {
        type: String
    },

    profession_id:{
        type: String
    },

    activity_id:{
        type: String
    },

    created_campaign:{
        type: String,
    },

    rating: {
        type: Number
    },

    avatar: {
        type: Object

    }


});

module.exports =  usersSchema;