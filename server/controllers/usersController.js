const User = require('../models/Users');
const Campaign = require('../models/Campaign');

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwt-config');


const userController = {};
userController.list = (req, res, next) => {
    

    User.find({})
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err =>{
        next(err);
    })

};

signToken = user => {
    return jwt.sign({
        iss: 'sawaProject',
        sub: user.id,
        iat: new Date().getTime(), //current time
        exp: new Date().setDate(new Date().getDate() + 1) //current time + 1 day
    }, JWT_SECRET);
};


userController.signup = async(req, res, next) => {

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


   await User.find({ "local.email": email })
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
                            res.status(200).json({ token });

                            console.log( req.value.body);

                            console.log(token);
                    }
                })
            }
        })

};

//GOOGLE SIGN-IN
userController.googleSignin = async (req, res, next) => {

    console.log('got here');

    const token = signToken(req.user);
    res.status(200).json({ token });

};

//FACEBOOK SIGN-IN
userController.facebookSignin = async(req, res, next) => {

    console.log('got here facebook');

    const token = signToken(req.user);
    res.status(200).json({ token });

};


userController.signin = async(req, res, next) => {
    //generate token
    const token = signToken(req.user);
    return res.status(200).json({
        message: 'sign-in successful',
        token: token
    });

};

    userController.secret = (req, res, next) => {

        console.log('manage to get hier');

        res.json({
            message: 'secret resource'
        });

    };


// show user by id
userController.show = async (req, res, next) => {

    console.log('req.params',req.params.Id); 

    const { Id } = req.params;
    const user = await User.findById(Id);
    res.status(200).json(user);

},

//replace show user by id
userController.replace = async(req, res, next) => {
    const { Id } = req.params;
    const newUser = req.body;
    const result = await User.findByIdAndUpdate(Id, newUser);
    console.log(result);
    res.status(200).json({success: true});
    
};

//update show user by id
userController.update = async(req, res, next) => {
    const { Id } = req.params;
    const newUser = req.body;
    const result = await User.findByIdAndUpdate(Id, newUser);

    console.log(result);

    res.status(200).json({success: true});

};

 //show existing campaigns
userController.getUserCampaigns = async(req, res, next) => {
    const { Id } = req.params;
    const user = await User.findById(Id).populate('campaigns');

    console.log(user, 'campaigns');
    
    res.status(201).json(user.created_campaigns);

    console.log('users', user);
    
};

userController.getConstructionCampaigns = async(req, res, next) => {
    User.find({}).populate('Construction')
    .exec((err, construction)=>{
        if(err){
            console.log('err', err);
            
        } else{
            console.log( 'printed',construction);
            
        }
    })
    // const { Id } = req.params;
    // const user = await User.findById(Id).populate('campaigns');

    // console.log(user, 'campaigns');
    
    res.status(201).json('user.created_campaigns');

   
    
};
userController.createConstructionCampaign = async(req, res, next) => {
    const { Id } = req.params;
    //create a new campaign
    const campaign = new Campaign(req.body);
    console.log('Campaign',campaign);

    //get user
    const user = await User.findById(Id);
    //assign user as campaign creator
    campaign.created_campaigns = user;
    //save campaign
    await campaign.save();
    console.log(req.body);

    // add campaign to the users created_by array
    user.created_campaigns.push(campaign);
    //save the user
    await user.save();
    res.status(201).json({user, campaign});

};

userController.createUserCampaign = async(req, res, next) => {
    const { Id } = req.params;
    //create a new campaign
    const campaign = new Campaign(req.body);
    console.log('Campaign',campaign);

    //get user
    const user = await User.findById(Id);
    //assign user as campaign creator
    campaign.created_by = user._id;
    //save campaign
    await campaign.save();
    console.log(req.body);

    // add campaign to the users created_by array
    user.created_campaigns.push(campaign);
    //save the user
    await user.save();
    res.status(201).json({user, campaign});

};



//delete
userController.delete = (req, res, next) => {
    User.deleteOne({
        _id: req.params.id
    },
        (error) => {
            if (error) {
                console.log(error);
                res.status(500).json({
                    error: error
                })
            } else {
                console.log('User deleted');
                res.status(200).json({
                    message: 'User deleted'
                })
            }
        })
};

module.exports = userController;