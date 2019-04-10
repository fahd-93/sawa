const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
require('./Construction');

const  usersSchema = new mongoose.Schema({
       method:{
        type:String,
        enum:['local', 'google', 'facebook'],
        required: true
    },  
    local:{
        name: {
            type: String,
            lowercase: true,
            
        },
        username:{
            type: String,
           
        },
         email: {
                type: String,
                
                match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            },
        password: {
                type: String,
                //required: [true, 'name field is required']
            },
    },
    google:{
        id:{
            type: String

        },
        email:{
            type: String,
            lowercase: true
        }
    },
    facebook:{
        id:{
            type: String

        },
        email:{
            type: String,
            lowercase: true
        }

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
    construction:[{
        type: Schema.Types.ObjectId,
        ref: 'Construction'
    }],

    created_campaigns:[{
        type: Schema.Types.ObjectId,
        ref: 'Campaigns'
    }],

    rating: {
        type: Number
    },

    avatar: {
        type: Object

    } 


});

usersSchema.pre('save', async function(next){
        try{
            if (this.method !== 'local') {
                next();
        }
     } catch(error) {
        next(error); 
     }
     

}); 
 
 usersSchema.methods.isValidPassword = async function(password) {
     
    try {
       return await bcrypt.compare(password, this.local.password)
    } catch (error) {
        throw new Error(error);
    }
} 




 const User = mongoose.model('User', usersSchema);
 module.exports = User;