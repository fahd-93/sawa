const User = require('../models/Users');
const Campaign = require('../models/Campaign');
const mongoose = require('mongoose');

campaignController = {}

//show existing campaigns
campaignController.getAllCampaigns = (req, res, next) => {

   Campaign.find({})
    .then(campaigns => {
        res.status(200).json(campaigns);
    })
    .catch(err =>{
        next(err);
    })
}

campaignController.getUserCampaigns = async(req, res, next) =>{
    const { Id } = req.params;
    const campaign = await Campaign.findById(Id);
    //console.log('campaign', campaign);
    res.status(201).json(campaign);
    
},
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

} */


module.exports = campaignController;

