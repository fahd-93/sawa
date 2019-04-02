const mongoose = require('mongoose');
const usersSchema = require('../models/Users');

//const User = require('../models/Users');

const User = mongoose.model('User', usersSchema);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config')




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

//create new user
userController.create = (req, res) => {

    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: 'err'
            });

        } else {
            let user = new User({
                name: req.body.name,
                email: req.body.email,
                username: req.body.username,
                password: hash
            });



            /* let user = new User({
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
                avatar: req.file.path  
                
            }); */

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
        }
    })

}



userController.check = (req, res) => {
    User.find({
        name: req.body.username
    })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'please enter your correct username'
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(404).json({
                        message: 'Please enter the correct Password'
                    });
                }
                if (result) {
                    const token = jwt.sign(
                        {
                            username: user[0].username,
                            userId: user[0]._id
                        },
                        config.secret,
                        {
                            expiresIn: '45s'

                        }
                    );
                    return res.status(200).json({
                        message: 'signin successful',

                        token: token
                    });
                }
                userController.login = (req, res) => {
                    let username = req.body.username;
                    let password = req.body.password;

                    User.findOne({ username, password }).then((user) => {
                        if (user) {
                            let sessionId = uuid();

                            res.cookie('session_id', sessionId, {
                                expires: new Date(Date.now() + 900000)
                            });

                            let session = new Session({
                                uuid: sessionId,
                                user_id: user,
                            })

                            session.save();

                            res.redirect('/home');
                        } else {
                            res.redirect('/signin');
                        }
                    });
                }
                res.status(401).json({
                    message: 'Please enter the right Username  and Password'
                });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })

        })
}

//update
userController.update = (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            avatar: req.file.path,
            updated_at: req.body.updated_at
        }
    }, {
            new: true
        }, (error, user) => {
            if (error) {
                console.log(error)
                res.status(400);
                res.send({
                    error: 'None shall pass'
                });

            } else {

                res.send(user)

            }
        })
}

//delete
userController.delete = (req, res, next) => {
    User.deleteOne({
        _id: req.params.id
    },
        (error) => {
            if (error) {
                console.log(error)
                res.status(500).json({
                    error: err
                })


            } else {
                console.log('User deleted');
                res.status(200).json({
                    message: 'User deleted'
                })



            }
        })
}









module.exports = userController;