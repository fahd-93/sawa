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
        .catch(err => {
            next(err);
        })
};

campaignController.getUserCampaigns = async(req, res) =>{
    const { Id } = req.params;
    const campaign = await Campaign.findById(Id);
    res.status(201).json(campaign);

};

module.exports = campaignController;

