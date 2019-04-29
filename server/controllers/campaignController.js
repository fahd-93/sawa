const User = require('../models/Users');
const Campaign = require('../models/Campaign');
const mongoose = require('mongoose');

campaignController = {};

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

campaignController.getUserCampaigns = async(req, res, next) =>{
    const { Id } = req.params;
    const campaign = await Campaign.findById(Id);
    //console.log('campaign', campaign);
    res.status(201).json(campaign);
    
};

module.exports = campaignController;

