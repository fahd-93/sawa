const mongoose = require('mongoose');
const constructionSchema = require('../models/Construction');
const Construction = mongoose.model('Construction', constructionSchema);
const constructionController = {};

//Load images
const { upload } = require('../handlers/multer');

//Create Construction campaign

constructionController.create = (req, res) => {
    const image = upload.single('constrPic');
    image(req, res, function (err) {

        if (err) {

            res.status(500).json({
                msg: err
            });
        } else {
            let imageUrl = null
            if (req.file !== undefined) {
                imageUrl = `uploads/${req.file.filename}`;
            }

            let constructionCampaign = new Construction({
                title: req.body.title,
                description: req.body.description,
                created_at: req.body.created_at,
                campaign_location: req.body.campaign_location,
                country_code: req.body.country_code,
                num_of_volunteers: req.body.num_of_volunteers,
                type_of_volunteers: req.body.type_of_volunteers,
                start_date: req.body.start_date,
                end_date: req.body.end_date,
                image: imageUrl,
                video: req.body.video
            })

            constructionCampaign.save()
                .then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: 'Campaign created'
                    });
                })
                .catch(err => {

                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                })
        }
    });
};
module.exports = constructionController;
