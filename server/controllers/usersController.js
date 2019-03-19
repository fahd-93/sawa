const mongoose = require('mongoose');
const usersSchema = require('../models/Users');
//const User = require('../models/Users');
const User = mongoose.model('User', usersSchema)


const userController = {};

//List all users
userController.list = (req, res) => {

    User.find({}).exec((error, users) => {
        if (error) {
            console.log('Error:', error);
        } else {
            res.send(users);
        }
    });
};


userController.create = (req, res) => {
    
     let user = new User({
        name: req.body.name,
        last_name: req.body.last_name,
        date_of_birth: req.body.date_of_birth,
        gender: req.body.gender,
        email: req.body.email,
        password: req.body.password,
        
        user_location: req.body.user_location,
        role: req.body.role,
        profession_id: req.body.profession_id ,
        activity_id: req.body.activity_id ,
        created_campaign: req.body.created_campaign,
        rating: req.body.rating 
      /*   avatar: req.file.path  */
        
    });

   user.save()
    .then(result => {
        console.log(result);

        res.status(201).json({
            message: 'User created'
        });
    })
    .catch(err => {

        console.log(err);
        res.status(500).json({
            error: err
        });

    });



};




module.exports = userController;