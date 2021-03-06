const User = require('../models/Users');
const Campaign = require('../models/Campaign');
const mongoose = require('mongoose');

campaignController = {};


// search
campaignController.search = (req, res) => {
    let campaignResearched = req.query.query;
    console.log("------dd--", campaignResearched);
    Campaign.find({ title: new RegExp(`${campaignResearched}`) }).exec((error, text) => {
        if (error) {
            console.log("Error:", error);
        } else {
            res.status(200).json({
                text:text,
                message: "Campaign Not Found"
            });
        }
    })
};

//show existing campaigns
campaignController.getAllCampaigns = (req, res, next) => {

   Campaign.find({})
    .then(campaigns => {
        res.status(200).json(campaigns);
    })
    .catch(err =>{
        next(err);
    })
};

campaignController.getUserCampaigns = async(req, res) =>{
    const { Id } = req.params;
    const campaign = await Campaign.findById(Id);
    //console.log('campaign', campaign);

			User.find({
				'_id': { $in: campaign.volunteers}
			}, function(err, volunteers){
				 console.log(volunteers);
                 res.status(201).send({campaign:campaign , volunteers:volunteers});
			});
};

/* 
campaignController.getUserCampaigns = async(req, res, next) =>{
    const { Id } = req.params;
    const user = await User.findById(Id);
    console.log('user', user);
    
},
campaignController.createUserCampaign = async(req, res, next) =>{
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
    res.status(201).json(campaign);

}; */

module.exports = campaignController;

