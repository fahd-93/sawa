const UserProfile = require('../models/Users');
const mongoose = require('mongoose');


const userProfileController = {};

userProfileController.list = (req, res) => {

    UserProfile.find({}).exec((error, users) => {
        if (error) {
            console.log('Error:', error)
        } else {
            res.send(users)
        }
    })
}

userProfileController.creat = (req, res) => {
    userProfile = new UserProfile({
        method:'local',
        name: req.body.name,
        last_name: req.body.last_name,
        date_of_birth: req.body.date_of_birth,
        gender: req.body.gender,
        created_at: req.body.created_at,
        user_location: req.body.user_location,
        role: req.body.role
    })
    userProfile
        .save()
        .then(result => {
            console.log(result);

            res.status(201).json({
                message: 'User created'
            });
        })
                                
       
}


module.exports = userProfileController;