const User = require('../models/Users');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwt-config');


const userController = {}
userController.list = (req, res) => {

    User.find({}).exec((error, users) => {
        if (error) {
            console.log('Error:', error)
        } else {
            res.send(users)
        }
    })
}

signToken = user => {
    return jwt.sign({
        iss: 'sawaProject',
        sub: user.id,
        iat: new Date().getTime(), //current time
        exp: new Date().setDate(new Date().getDate() + 1) //current time + 1 day
    }, JWT_SECRET);
}


userController.signup = (req, res, next) => {
    // email & password

    //console.log( req.value.body);
    console.log('usersController.signup() called!');

    const {
        name,
        last_name,
        email,
        username,
        password,
        date_of_birth,
        gender,
        created_at
    } = req.value.body;


    User.find({ "local.email": email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: 'Mail exists'
                });

            } else {
                bcrypt.hash(password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: 'err'
                        });

                    } else {
                        let user = new User({
                            method: 'local',
                            local: {
                                name,
                                last_name,
                                email,
                                username,
                                password: hash,
                                date_of_birth,
                                gender,
                                created_at
                            }

                        });


                        user
                            .save();

                        const token = signToken(user);
                        res.status(200).json({ token })


                    }
                })
            }
        })

},

    //google  signin
    userController.googleSignin = async (req, res, next) => {
        console.log('got here');
        const token = signToken(req.user);
        res.status(200).json({ token });

    };

//facebook  signin
userController.facebookSignin = async (req, res, next) => {
    console.log('got here facebook');
    const token = signToken(req.user);
    res.status(200).json({ token });

};


userController.signin = async (req, res, next) => {
    //generate token
    const token = signToken(req.user);
    return res.status(200).json({
        message: 'signin successful',
        token: token
    });

},

    userController.secret = (req, res, next) => {
        console.log('manage to get hier');
        res.json({
            message: 'secret resource'
        });

    };

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